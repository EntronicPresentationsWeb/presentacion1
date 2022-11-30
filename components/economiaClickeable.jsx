import styles from '../styles/Home.module.scss';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';


export default function EconomiaClickeable() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xxl={6}>
                        <figure>
                            <Image src="/home/Entronic-logo.png" width={490} height={150} />
                        </figure>
                    </Col>
                    <Col xxl={6}>
                        <Image src="/economiaClickeable/Numero-de-pagina1.png" width={343} height={150} className="float-right" />
                    </Col>
                </Row>
                <Row className="img-bg-row-presentation-1 mt-10">
                    <Col xxl={6}>
                        <h4 className="font-presentation1-banner">Somos el punto de apoyo para el comercio local </h4>
                    </Col>
                    <Col xxl={6} className="bg-img-franjaNaranja" id="#animation">
                        <h4 className="font-presentation1-FN">Hacer la <strong className="color-strong-FN">economía local</strong> clickeable </h4>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="bg-img-row2-presentation1">
                    <Col>
                        <h4 className="color-white">Ven por la herramienta  <br />
                            Quedate por la Red
                        </h4>
                    </Col>
                    <Col>
                        <Image src="/economiaClickeable/Numero-de-pagina2.png" width={343} height={150} className="float-right" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <Image src="/economiaClickeable/LogoArcalia.png" width={258} height={67} />
                        </Row>
                        <Row>
                            <Image src="/economiaClickeable/LogoFixup.png" width={200} height={136} />
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <div className="card">
                                <Image src="/economiaClickeable/Icono-gestor-tareas.png" width={65} height={65} />
                                <div className="card-padding">
                                    <h4>Gestor de tareas</h4>
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <div className="card">
                                <Image src="/economiaClickeable/Icono-administracion.png" width={65} height={65} />
                                <div className="card-padding">
                                    <h4>Administración y Gestión
                                        de procesos para prestadores
                                        de servicios tecnicos </h4>
                                </div>
                            </div>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <div>
                                <Image src="/economiaClickeable/Flecha.png" width={108} height={50} />
                            </div>
                        </Row>
                        <Row>
                            <div>
                                <Image src="/economiaClickeable/Flecha.png" width={108} height={50} />
                            </div>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <div className="card">
                                <Image src="/economiaClickeable/Icono-ecosistema.png" width={65} height={65} />
                                <div className="card-padding">
                                    <h4>Ecosistema Arcalia</h4>
                                    <p>Demanda de servicios</p>
                                    <p>Oferta servicios técnicos</p>
                                </div>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}