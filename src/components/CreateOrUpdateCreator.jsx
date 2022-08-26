import React, { useContext, useEffect, useState } from "react"
import { ModalBody, ModalFooter, Col, Row, FormGroup, Label } from "reactstrap"
import { useForm } from "react-hook-form"
import ChainContext from "../store/chain-Context"
import UserTypeContext from "../store/user-type-context"
import { useWeb3Contract } from "react-moralis"
import { useNotification } from "web3uikit"

const CreateOrUpdateCreator = ({ toggle, setIsCreator }) => {
    const [creatorInfo, setCreatorInfo] = useState({
        name: " ",
        country: " ",
        img: " ",
        about: " ",
        emailId: " ",
        instagram: " ",
    })
    const [trigger, setTrigger] = useState(" ")
    const userTypeContextCtx = useContext(UserTypeContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const chainContextCtx = useContext(ChainContext)
    //const userTypeContextCtx = useContext(UserTypeContext)

    const {
        runContractFunction: createOrUpdateCreators,
        isLoading,
        isFetching,
    } = useWeb3Contract({
        abi: chainContextCtx.abi,
        contractAddress: chainContextCtx.contractAddress,
        functionName: "createOrUpdateCreators",
        params: {
            _name: creatorInfo.name,
            _country: creatorInfo.country,
            _img: creatorInfo.img,
            _about: creatorInfo.about,
            _emailId: creatorInfo.emailId,
            _instagram: creatorInfo.instagram,
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

        await handleSuccessOrErrorNotification("info", "Successfully Created Creator account")
        userTypeContextCtx.updateContext()
    }

    const handleError = async (error) => {
        console.log(error)
        handleSuccessOrErrorNotification("error", "Something went wrong")
    }

    const onSubmit = async (userData) => {
        // console.log(JSON.stringify(userData["name"]).toLowerCase())
        setCreatorInfo({
            name: userData["name"],
            country: userData["country"],
            img: userData["image"],
            about: userData["about"],
            emailId: userData["email"],
            instagram: userData["instagram"],
        })
    }

    useEffect(() => {
        const createOrUpdateCreatorsCall = async () => {
            if (chainContextCtx.isWeb3Enabled && creatorInfo["name"].length > 1) {
                await createOrUpdateCreators({
                    onSuccess: handleSuccess,
                    onError: (error) => handleError(error),
                })
            }
        }
        createOrUpdateCreatorsCall()
    }, [creatorInfo])

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ModalBody>
                    <Row className="mt-4">
                        <Col md={6}>
                            <FormGroup>
                                <Label for="name" className="block">
                                    Name
                                </Label>

                                <input
                                    className="px-2 py-2 bg-slate-200 rounded-lg  focus:outline-none"
                                    {...register("name", {
                                        required: true,
                                        maxLength: 20,
                                        pattern: /^[A-Za-z]+$/i,
                                    })}
                                />
                                {errors?.name?.type === "required" && <p>This field is required</p>}
                                {errors?.name?.type === "maxLength" && (
                                    <p> name cannot exceed 20 characters</p>
                                )}
                                {errors?.name?.type === "pattern" && (
                                    <p>Alphabetical characters only</p>
                                )}
                            </FormGroup>
                        </Col>

                        <Col md={6}>
                            <FormGroup>
                                <Label for="country" className="block">
                                    Country
                                </Label>
                                <input
                                    className="px-2 py-2 bg-slate-200 rounded-lg  focus:outline-none"
                                    {...register("country", {
                                        required: true,
                                        maxLength: 20,
                                        pattern: /^[A-Za-z]+$/i,
                                    })}
                                />
                                {errors?.country?.type === "required" && (
                                    <p>This field is required</p>
                                )}
                                {errors?.country?.type === "maxLength" && (
                                    <p>cannot exceed 20 characters</p>
                                )}
                                {errors?.country?.type === "pattern" && (
                                    <p>Alphabetical characters only</p>
                                )}
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="image" className="block">
                                    Image Url
                                </Label>
                                <input
                                    className="px-2 py-2 bg-slate-200 rounded-lg  focus:outline-none"
                                    {...register("image", {
                                        required: true,
                                        maxLength: 20,
                                    })}
                                />
                                {errors?.image?.type === "required" && (
                                    <p>This field is required</p>
                                )}
                                {errors?.image?.type === "maxLength" && (
                                    <p> cannot exceed 20 characters</p>
                                )}
                            </FormGroup>
                        </Col>

                        <Col md={6}>
                            <FormGroup>
                                <Label for="about" className="block">
                                    About
                                </Label>
                                <input
                                    className="px-2 py-2 bg-slate-200 rounded-lg  focus:outline-none"
                                    {...register("about", {
                                        required: true,
                                        maxLength: 20,
                                        pattern: /^[A-Za-z]+$/i,
                                    })}
                                />
                                {errors?.about?.type === "required" && (
                                    <p>This field is required</p>
                                )}
                                {errors?.about?.type === "maxLength" && (
                                    <p>First name cannot exceed 20 characters</p>
                                )}
                                {errors?.about?.type === "pattern" && (
                                    <p>Alphabetical characters only</p>
                                )}
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="email" className="block">
                                    Email
                                </Label>
                                <input
                                    type="email"
                                    className="px-2 py-2 bg-slate-200 rounded-lg  focus:outline-none"
                                    {...register("email", {
                                        required: true,
                                        maxLength: 20,
                                    })}
                                />
                                {errors?.name?.type === "required" && <p>This field is required</p>}
                                {errors?.name?.type === "maxLength" && (
                                    <p> cannot exceed 20 characters</p>
                                )}
                            </FormGroup>
                        </Col>

                        <Col md={6}>
                            <FormGroup>
                                <Label for="instagram" className="block">
                                    Instagram
                                </Label>
                                <input
                                    className="px-2 py-2 bg-slate-200 rounded-lg  focus:outline-none"
                                    {...register("instagram", {
                                        required: true,
                                        maxLength: 20,
                                    })}
                                />
                                {errors?.name?.type === "required" && <p>This field is required</p>}
                                {errors?.name?.type === "maxLength" && (
                                    <p>cannot exceed 20 characters</p>
                                )}
                            </FormGroup>
                        </Col>
                    </Row>
                    <input
                        type="checkbox"
                        className="mt-2 checked:bg-blue-500"
                        onClick={setIsCreator}
                    />{" "}
                    Not a Creator
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
        </>
    )
}

export default CreateOrUpdateCreator
