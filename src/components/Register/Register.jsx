import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { GoogleButton } from "../GoogleButton/GoogleButton";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

export const Register = () => {
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
        "http://localhost:8080/api/sessions/register",
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
      <p className="title text-white">Register</p>
      <p className="message">
        Signup now and get full access to our ecommerce platform.{" "}
      </p>
      <div className="flex gap-1">
        <label>
          <input
            className={styles.input}
            type="text"
            placeholder=""
            required=""
            name="name"
            onChange={handleData}
          />
          <span>Name</span>
        </label>
      </div>

      <label>
        <input
          className={styles.input}
          type="email"
          placeholder=""
          required=""
          name="email"
          onChange={handleData}
        />
        <span>Email</span>
      </label>

      <label>
        <input
          className={styles.input}
          type="password"
          placeholder=""
          required=""
          name="password"
          onChange={handleData}
        />
        <span>Password</span>
      </label>
      <button type="submit" className={styles.submit}>
        Submit
      </button>
      <GoogleButton />
      <p className={styles.signin}>
        Already have an account? <Link to={"/sessions/login"}>Login</Link>{" "}
      </p>
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
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </form>
  );
};
