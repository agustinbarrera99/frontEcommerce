import styles from "../Register/styles.module.css"
import { GoogleButton } from "../GoogleButton/GoogleButton"
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
export const Login = () => {

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [modalText, setModalText] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/sessions/login",
        data
      );
      const responseText = response.data.response || response.data.message;
      setModalText(responseText);
      onOpen();
    } catch (error) {
      console.error("Error al registrar al usuario:", error);
      setModalText(error.response?.data?.message || "Error desconocido");
      onOpen();
    }
  };

  const handleCloseModal = () => {
    setModalText(null);
    onClose();
  };
    
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
        <p className="title text-white mb-1">Login</p>  
        <p>Login now and get full access to our ecommerce platform.</p>     
        <label className="mt-3 mb-3">
            <input className={styles.input} name="email" onChange={handleData} type="email" placeholder="" required="" />
            <span>Email</span>
        </label> 
        <label>
            <input className={styles.input} onChange={handleData} name="password" type="password" placeholder="" required=""/>
            <span>Password</span>
        </label>
        <button className={`${styles.submit} mt-3`}>Login</button>
        <div className="mt-3 flex justify-center">
        <GoogleButton />
        </div>
        <p className={styles.signin}>have not an account ? <Link to="/sessions/register">Register</Link></p>
        <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onClose={handleCloseModal}
        classNames={{
          backdrop: "bg-black",
          content: "bg-black text-white",
          container: "w-full max-w-md",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Notificacion
              </ModalHeader>
              <ModalBody>
                <p>{modalText}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  OK
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </form>
    )
}