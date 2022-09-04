import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/inertia-react';
import React, { useEffect } from 'react'
import { Button, Row, Table } from "react-bootstrap";
import { BsFillTrashFill, BsPencil } from "react-icons/bs";
import { toast } from 'react-toastify';

const index = (props) => {

	useEffect(() => {
		console.log(props);
	}, [])

	return (
		<>
			<Link href='/posts/create' className='m-2 d-flex justify-content-end'>
				<Button variant="outline-primary">CRIAR</Button>{' '}
			</Link>

			<div className="border shadow rounded mb-2">
				<Table striped hover responsive size="sm" className="m-0">
					<thead>
						<tr>
							<th className="thTableStyle">Id</th>
							<th className="thTableStyle">Título</th>
							<th className="thTableStyle">Conteúdo</th>
							<th className="tdTableActions">Ações</th>
						</tr>
					</thead>
					<tbody>
						{props.posts.map((el, idx) => (
							<tr key={idx}>
								<td align="left" style={{ borderRight: "1px solid #dee2e6" }}>{el.id}</td>
								<td align="left" style={{ borderRight: "1px solid #dee2e6" }}>{el.title}</td>
								<td align="left" style={{ borderRight: "1px solid #dee2e6" }}>{el.content}</td>
								<td>
									<div className="d-flex justify-content-center">
										<div className="me-2">
											<Link href={`/posts/edit/${el.id}`}>
												<BsPencil
													color="blue"
													style={{ cursor: "pointer" }}
												/>
											</Link>

										</div>
										<div>
											<BsFillTrashFill
												color="red"
												style={{ cursor: "pointer" }}
												onClick={() => {
													if (window.confirm('Deseja deletar este item?')) {
														Inertia.delete(`/posts/destroy/${el.id}`, {
															onSuccess: () => {
																toast.success('Item apagado com sucesso')
															},
															onError: () => {
																toast.error('Erro ao apagar item')
															}
														})
													}
												}}
											/>
										</div>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
		</>
	)
}

export default index