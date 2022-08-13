import { useState } from "react"
import { Modal, ModalHeader, ModalBody, ModalFooter, Col, Row, FormGroup, Label } from "reactstrap"
import { useForm } from "react-hook-form"
import CreateOrUpdateCreator from "./CreateOrUpdateCreator"
import { abi, contractAddresses } from "../constants"
import { useMoralis, useWeb3Contract } from "react-moralis"

const CreateAccountForm = ({ modal, toggle, args, creatorBool }) => {
    const [creator, setCreator] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const { chainId: chainIdHex, isWeb3Enabled, enableWeb3 } = useMoralis()

    const chainId = parseInt(chainIdHex)
    const fundCreatorsAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    }

    const isCreator = () => {
        setCreator((prevState) => !prevState)
    }

    creatorBool(creator)

    return (
        <>
            <div>
                <Modal isOpen={modal} toggle={toggle} {...args}>
                    <ModalHeader toggle={toggle}>
                        {creator ? "Join as Creator" : "Join as a user"}
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
                                    onClick={isCreator}
                                />{" "}
                                Creator
                            </ModalBody>
                            <ModalFooter className="mt-10 flex flex-row space-x-5">
                                <button
                                    type="submit"
                                    className="px-3 py-2 rounded-lg font-semibold text-violet-700 text-sm bg-violet-50 hover:bg-violet-300 duration-800"
                                >
                                    Submit
                                </button>
                                <div
                                    className="px-3 py-2 rounded-lg font-semibold text-violet-700 text-sm bg-violet-50 hover:bg-violet-300 duration-800"
                                    color="secondary"
                                    onClick={toggle}
                                >
                                    Cancel
                                </div>
                            </ModalFooter>
                        </form>
                    )}
                    {creator && <CreateOrUpdateCreator toggle={toggle} isCreator={isCreator} />}
                </Modal>
            </div>
        </>
    )
}

export default CreateAccountForm
