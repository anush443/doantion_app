import { useState } from "react"
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import { useForm } from "react-hook-form"

const CreateAccountForm = ({ modal, toggle, args, creatorBool }) => {
    const [creator, setCreator] = useState(false)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

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
                    <ModalHeader toggle={toggle}>Create Account</ModalHeader>
                    <ModalBody>
                        {!creator && (
                            <div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <label className="block">
                                        <span className="block text-sm font-medium text-slate-700">
                                            Name
                                        </span>
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
                                    </label>
                                    <input
                                        type="checkbox"
                                        className="mt-3 checked:bg-blue-500"
                                        onClick={isCreator}
                                    />{" "}
                                    Creator
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
                            </div>
                        )}

                        {creator && (
                            <div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input
                                        type="checkbox"
                                        className="mt-3 checked:bg-blue-500"
                                        onClick={isCreator}
                                    />{" "}
                                    Not a creator
                                    <div className="flex flex-row mt-3 space-x-5 ">
                                        <label>
                                            <span className="text-sm font-medium text-slate-700">
                                                Name
                                            </span>
                                            <input
                                                className=" px-2 py-2 bg-slate-200 rounded-lg  focus:outline-none md:ml-4"
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
                                        </label>
                                        <label>
                                            <span className="  text-sm font-medium text-slate-700">
                                                Country
                                            </span>
                                            <input
                                                className="px-2 py-2 bg-slate-200 rounded-lg  focus:outline-none md:ml-4"
                                                {...register("country", {
                                                    required: true,
                                                    maxLength: 20,
                                                    pattern: /^[A-Za-z]+$/i,
                                                })}
                                            />
                                            {errors?.country?.type === "pattern" && (
                                                <p>Alphabetical characters only</p>
                                            )}
                                            {errors?.country?.type === "maxLength" && (
                                                <p>First name cannot exceed 20 characters</p>
                                            )}
                                            {errors?.country?.type === "pattern" && (
                                                <p>Alphabetical characters only</p>
                                            )}
                                        </label>
                                    </div>
                                    <div className="flex flex-row mt-3 space-x-5 ">
                                        <label>
                                            <span className="  text-sm font-medium text-slate-700">
                                                Image
                                            </span>
                                            <input
                                                className=" px-2 py-2 bg-slate-200 rounded-lg  focus:outline-none md:ml-4"
                                                {...register("image", {
                                                    required: true,
                                                    maxLength: 50,
                                                })}
                                            />
                                            {errors?.image?.type === "pattern" && (
                                                <p>Alphabetical characters only</p>
                                            )}
                                            {errors?.image?.type === "maxLength" && (
                                                <p>First name cannot exceed 50 characters</p>
                                            )}
                                        </label>
                                        <label>
                                            <span className=" text-sm font-medium text-slate-700">
                                                About
                                            </span>
                                            <input
                                                className="px-2 py-2 bg-slate-200 rounded-lg  focus:outline-none md:ml-4"
                                                {...register("about", {
                                                    required: true,
                                                    maxLength: 50,
                                                })}
                                            />
                                            {errors?.about?.type === "pattern" && (
                                                <p>Alphabetical characters only</p>
                                            )}
                                            {errors?.about?.type === "maxLength" && (
                                                <p>First name cannot exceed 50 characters</p>
                                            )}
                                        </label>
                                    </div>
                                    <div className="flex flex-row mt-3 space-x-5 ">
                                        <label>
                                            <span className="  text-sm font-medium text-slate-700">
                                                Email
                                            </span>
                                            <input
                                                type="email"
                                                className=" px-2 py-2 bg-slate-200 rounded-lg  focus:outline-none md:ml-4"
                                                {...register("email", {
                                                    required: true,
                                                    maxLength: 50,
                                                })}
                                            />
                                            {errors?.eamil?.type === "pattern" && (
                                                <p>Alphabetical characters only</p>
                                            )}
                                            {errors?.email?.type === "maxLength" && (
                                                <p>First name cannot exceed 50 characters</p>
                                            )}
                                        </label>
                                        <label>
                                            <span className="  text-sm font-medium text-slate-700">
                                                Instagram
                                            </span>
                                            <input
                                                className="px-2 py-2 bg-slate-200 rounded-lg  focus:outline-none md:ml-4"
                                                {...register("instagram", {
                                                    required: true,
                                                    maxLength: 50,
                                                })}
                                            />
                                            {errors?.instagram?.type === "pattern" && (
                                                <p>Alphabetical characters only</p>
                                            )}
                                            {errors?.instagram?.type === "maxLength" && (
                                                <p>First name cannot exceed 50 characters</p>
                                            )}
                                        </label>
                                    </div>
                                    <div className="flex flex-row mt-3 space-x-5 ">
                                        <label>
                                            <span className="  text-sm font-medium text-slate-700">
                                                Linkedin
                                            </span>
                                            <input
                                                className="px-2 py-2 bg-slate-200 rounded-lg  focus:outline-none md:ml-4"
                                                {...register("linkedin", {
                                                    required: true,
                                                    maxLength: 50,
                                                })}
                                            />
                                            {errors?.linkedin?.type === "pattern" && (
                                                <p>Alphabetical characters only</p>
                                            )}
                                            {errors?.linkedin?.type === "maxLength" && (
                                                <p>First name cannot exceed 50 characters</p>
                                            )}
                                        </label>
                                    </div>
                                    <ModalFooter className="mt-3 flex flex-row space-x-5">
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
                            </div>
                        )}
                    </ModalBody>
                </Modal>
            </div>
        </>
    )
}

export default CreateAccountForm
