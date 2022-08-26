import { useContext, useEffect, useState } from "react"
import { Modal, ModalHeader, ModalBody, ModalFooter, Col, Row, FormGroup, Label } from "reactstrap"
import { useForm } from "react-hook-form"
import ChainContext from "../store/chain-Context"
import UserTypeContext from "../store/user-type-context"

import CreateOrUpdateCreator from "./CreateOrUpdateCreator"
import { useWeb3Contract } from "react-moralis"
import { useNotification } from "web3uikit"

const CreateAccountForm = ({ modal, toggle, args, creatorBool }) => {
    const [creator, setCreator] = useState(false)
    const [userName, setUsername] = useState(" ")
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const chainContextCtx = useContext(ChainContext)
    const userTypeContextCtx = useContext(UserTypeContext)
    const {
        runContractFunction: createUser,
        isLoading,
        isFetching,
    } = useWeb3Contract({
        abi: chainContextCtx.abi,
        contractAddress: chainContextCtx.contractAddress,
        functionName: "createUser",
        params: {
            _name: userName,
        },
    })

    const dispatch = useNotification()

    const handleSuccessOrErrorNotification = async (type, message) => {
        dispatch({
            type: type,
            title: "Transaction Notification",
            message: message,
            position: "topR",
            icon: "bell",
        })
    }

    const handleSuccess = async (tx) => {
        await tx.wait(1)

        await handleSuccessOrErrorNotification("info", "Successfully Created new user")
        userTypeContextCtx.updateContext()
    }

    const handleError = async (error) => {
        console.log(error)
        handleSuccessOrErrorNotification("error", "Something went wrong")
    }

    const onSubmit = async (userData) => {
        setUsername(JSON.stringify(userData["name"]).toLowerCase())
        createUserCall()
    }

    const createUserCall = async () => {
        if (chainContextCtx.isWeb3Enabled && userName.length > 1) {
            await createUser({
                onSuccess: handleSuccess,
                onError: (error) => handleError(error),
            })
            toggle()
        }
    }

    const setIsCreator = () => {
        setCreator((prevState) => !prevState)
    }

    creatorBool(creator)

    return (
        <>
            <div>
                <Modal isOpen={modal} toggle={toggle} {...args}>
                    <ModalHeader toggle={toggle}>
                        {creator ? "Join as Creator" : "Join as a user"}
                        {userName}
                    </ModalHeader>
                    {!creator && (
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <ModalBody>
                                <Row>
                                    <Col md={8}>
                                        <FormGroup>
                                            <Label for="name">Name</Label>
                                            <input
                                                className="px-2 py-2 bg-slate-200 rounded-lg  focus:outline-none"
                                                {...register("name", {
                                                    required: true,
                                                    maxLength: 20,
                                                    pattern: /^[A-Za-z]+$/i,
                                                })}
                                            />

                                            {errors?.name?.type === "required" && (
                                                <p>This field is required</p>
                                            )}
                                            {errors?.name?.type === "maxLength" && (
                                                <p>First name cannot exceed 20 characters</p>
                                            )}
                                            {errors?.name?.type === "pattern" && (
                                                <p>Alphabetical characters only</p>
                                            )}
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <input
                                    type="checkbox"
                                    className="mt-2 checked:bg-blue-500"
                                    onClick={setIsCreator}
                                    disabled={isLoading || isFetching}
                                />{" "}
                                Creator
                            </ModalBody>
                            <ModalFooter className="mt-10 flex flex-row space-x-5">
                                <button
                                    type="submit"
                                    className="px-3 py-2 rounded-lg font-semibold text-violet-700 text-sm bg-violet-50 hover:bg-violet-300 duration-800"
                                    disabled={isLoading || isFetching}
                                >
                                    Submit
                                </button>
                                <div
                                    className="px-3 py-2 rounded-lg font-semibold text-violet-700 text-sm bg-violet-50 hover:bg-violet-300 duration-800"
                                    disabled={isLoading || isFetching}
                                    color="secondary"
                                    onClick={toggle}
                                >
                                    Cancel
                                </div>
                            </ModalFooter>
                        </form>
                    )}
                    {creator && (
                        <CreateOrUpdateCreator toggle={toggle} setIsCreator={setIsCreator} />
                    )}
                </Modal>
            </div>
        </>
    )
}

export default CreateAccountForm
