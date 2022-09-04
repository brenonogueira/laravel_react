import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-react';
import React from 'react'
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { toast } from 'react-toastify';
// import { useForm } from "react-hook-form";

const Create = () => {
  // const { register, handleSubmit, setValue, watch, reset } = useForm();
  const { data, setData, post, processing, errors, transform } = useForm({
    title: '',
    content: '',
  })


  // const onSubmit = async (data) => {
  //   console.log(data)
  //   // Inertia.post('/posts/store', data)
  //   post('/posts/store')
  // }

  const submit = (e) => {
    e.preventDefault();

    transform((data) => ({
      ...data,
      teste: 'teste'
    }))

    post('/posts/store', {
      data: transform((data) => ({
        ...data,
        title: 'OLÁ'
      })),
      onSuccess: () => {
        toast.success('Item criado com sucesso')
      },
      onError: () => {
        toast.error('Erro ao criar item')
      }
    })
  }

  return (
    <Card>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Form onSubmit={submit}>
          <Row>
            <Col lg={12} className="d-flex justify-content-center mb-3">
              <Form.Control
                type="text"
                placeholder="Titulo"
                // {...register("title", {})}
                value={data.title}
                required
                onChange={(e) => setData('title', e.target.value)}
              />
            </Col>
            <Row>
              <Col lg={12} className="d-flex justify-content-center mb-3">
                <Form.Control
                  as="textarea"
                  placeholder="Conteúdo"
                  // {...register("content", {})}
                  required
                  value={data.content}
                  onChange={(e) => setData('content', e.target.value)}
                />
              </Col>
            </Row>
          </Row>
          <Button type='submit' variant="outline-primary">CRIAR</Button>{' '}
        </Form>
      </Card.Body>
    </Card>

  )
}

export default Create
