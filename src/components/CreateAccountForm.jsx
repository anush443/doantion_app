import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

const CreateAccountForm = ({ modal, toggle }) => {
    return (
        <>
            <div>
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter className="flex flex-row space-x-5">
                        <button className="px-3 py-2 rounded-lg  text-white text-lg bg-zinc-600 hover:bg-zinc-800 duration-800">
                            Submit
                        </button>
                        <button
                            className="px-3 py-2 rounded-lg  text-white text-lg bg-zinc-400 hover:bg-zinc-800 duration-800"
                            color="secondary"
                            onClick={toggle}
                        >
                            Cancel
                        </button>
                    </ModalFooter>
                </Modal>
            </div>
        </>
    )
}

export default CreateAccountForm
