import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import AdminContainer from "../layout/container";
import CheckIcon from "../../../components/ui/icons/check";
import LoadingIcon from "../../../components/ui/icons/loading";
import UIModal from "../../../components/ui/modal";
import { Col, Row, Table, Button } from "reactstrap";

export default function Users(props) {
  const { data, error } = props;
  const router = useRouter();

  let Users = [];

  //modal controls
  const [uuid, setUUID] = useState("");
  const [modal, setModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
  const toggle = () => setModal(!modal);

  const refreshData = () => {
    router.replace(router.asPath);
  };
  const updateRecord = (e, id) => {
    e.preventDefault();
    console.log(id)
    router.push(`/panel/users/update/${id}`);
  };
  const removeRecord = (e, id) => {
    e.preventDefault();
    setModalTitle("Eliminar");
    setModalContent("¿Está seguro?");
    setModal(true);
    setUUID(id);
  };
  const handleDelete = async (d) => {
    console.log(d);

    setModalContent(<LoadingIcon />);
    //POST form values
    const res = await fetch("/api/users/" + uuid, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uuid,
      }),
    });

    //workflow success or fail
    if (res.status < 300) {
      setModalContent(<CheckIcon />);
      refreshData();
      setTimeout(() => {
        toggle();
      }, 1200);
    } else {
      setModalContent("No se pudo eliminar, por favor intente de nuevo");
    }
    setModal(true);
  };
  if (typeof error == "undefined") {
    if (data.length > 0) {
      Users = data.map((item) => {
        return (
          <tr key={item.uuid}>
            <th scope="row">
              <input type="checkbox" className="hidden" name="users[]" value={item.id} />
            </th>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>
              <button
                className="btn btn-default"
                onClick={(e) => {
                  console.log(e,item);
                  updateRecord(e, item.id);
                }}
              >
                <i className="fa fa-edit"></i>
              </button>
              <button
                className="btn btn-default"
                onClick={(e) => {
                  removeRecord(e, item.id);
                }}
              >
                <i className="fa fa-trash"></i>
              </button>
            </td>
          </tr>
        );
      });
    } else {
      Users = (
        <tr>
          <td colSpan="4">No se encontraron registros</td>
        </tr>
      );
    }
  } else {
    Users = (
      <tr>
        <td colSpan="4">{error}</td>
      </tr>
    );
  }

  return (
    <AdminContainer>
      <h1>Usuarios</h1>

      <UIModal
        props={{
          title: modalTitle,
          content: modalContent,
          btnAccept: handleDelete,
          btnCancel: toggle,
          toggle,
          modal,
        }}
      />

      <Row>
        <Link href="/panel/users/create" passHref={true}>
          <Button className="btn btn-default" color="primary">
            Crear Usuario
          </Button>
        </Link>
      </Row>
      <Table hover>
        <thead>
          <tr>
            <th> </th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{Users}</tbody>
      </Table>
    </AdminContainer>
  );
}

export async function getServerSideProps(ctx) {
  const { req, res, params } = ctx;

  const PORT = process.env.PORT ?? 3000;
  const baseurl = process.env.BASE_URL + ":" + PORT;
  console.log(baseurl);
  let r = await fetch(baseurl +"/api/users");
  if (r.status === 500) {
    return {
      props: {
        data: [],
        error: "No hay conexión con el servidor",
      },
    };
  }

  if (r.status === 404) {
    return {
      props: {
        data: [],
        error: "HTTP 404: Not found /api/users",
      },
    };
  }

  let data = await r.json();
  const newData = data.map(({ password, ...rest }) => rest);
  return {
    props: {
      data: newData,
    },
  };
}
