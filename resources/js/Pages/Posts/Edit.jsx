import React, { useEffect } from 'react'
import { Inertia } from '@inertiajs/inertia';
import { useForm, usePage } from '@inertiajs/inertia-react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { toast } from 'react-toastify';
// import { useForm } from "react-hook-form";

const Edit = () => {
  // const { register, handleSubmit, setValue, watch, reset } = useForm();
  const page = usePage();

  const { data, setData, put, processing, errors, transform } = useForm({
    title: page.props.title || '',
    content: page.props.content || '',
  })

  const submit = (e) => {
    e.preventDefault();

    put(`/posts/update/${page.props.id}`, {
      data: data,
      onSuccess: () => {
        toast.success('Item editado com sucesso')
      },
      onError: () => {
        toast.error('Erro ao editar item')
      }
    })
  }

  // const onSubmit = async (data) => {
  //   console.log(data)
  //   // Inertia.post('/posts/store', data)
  //   post('/posts/store')
  // }

  useEffect(() => {
    console.log('====================================')
    console.log(page.props)
    console.log('====================================')
  }, [])

  return (
    <Container>
      <Form onSubmit={submit}>
        <Row>
          <Col lg={2} className="d-flex justify-content-center mb-3">
            <Form.Control
              type="text"
              placeholder="Titulo"
              // {...register("title", {})}
              value={data.title}
              onChange={(e) => setData('title', e.target.value)}
            />
          </Col>
          <Col lg={2} className="d-flex justify-content-center mb-3">
            <Form.Control
              type="text"
              placeholder="Conteúdo"
              // {...register("content", {})}
              value={data.content}
              onChange={(e) => setData('content', e.target.value)}
            />
          </Col>

        </Row>
        <Button type='submit' variant="outline-primary">Editar</Button>{' '}
      </Form>

    </Container>
  )
}

export default Edit
