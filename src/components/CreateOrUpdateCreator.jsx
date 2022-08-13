import React, { useState } from "react"
import { ModalHeader, ModalBody, ModalFooter, Col, Row, FormGroup, Label } from "reactstrap"
import { useForm } from "react-hook-form"

const CreateOrUpdateCreator = ({ toggle, isCreator }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    }
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
                                    <p>First name cannot exceed 20 characters</p>
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
                                    <p>First name cannot exceed 20 characters</p>
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
                                    <p>First name cannot exceed 20 characters</p>
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
                                    {...register("name", {
                                        required: true,
                                        maxLength: 20,
                                    })}
                                />
                                {errors?.name?.type === "required" && <p>This field is required</p>}
                                {errors?.name?.type === "maxLength" && (
                                    <p>First name cannot exceed 20 characters</p>
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
                                    {...register("name", {
                                        required: true,
                                        maxLength: 20,
                                        pattern: /^[A-Za-z]+$/i,
                                    })}
                                />
                                {errors?.name?.type === "required" && <p>This field is required</p>}
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
