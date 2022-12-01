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
                        <h4 className="color-white pt-15 ml-30 text-center">Ven por la herramienta <br />
                            Quedate por la Red
                        </h4>
                    </Col>
                    <Col>
                        <Image src="/economiaClickeable/Numero-de-pagina2.png" width={343} height={150} className="float-right" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row className="mt-25">
                            <Image src="/economiaClickeable/LogoArcalia.png" width={258} height={67} />
                        </Row>
                        <Row className="mt-40 mb-25">
                            <Image src="/economiaClickeable/LogoFixup.png" width={200} height={136} />
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <div className="card-frame-2 mt-25">
                                <Image src="/economiaClickeable/Icono-gestor-tareas.png" width={65} height={65} className="mt-icon-card" />
                                <div className="card-padding">
                                    <h5 className="text-center mt-10">Gestor de tareas</h5>
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <div className="card-frame-2 mt-25">
                                <Image src="/economiaClickeable/Icono-administracion.png" width={65} height={65} className="mt-icon-card" />
                                <div className="card-padding">
                                    <h5 className="text-center mt-10">Administración y Gestión
                                        de procesos para prestadores
                                        de servicios tecnicos </h5>
                                </div>
                            </div>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <div className="mt-55 ml-35">
                                <Image src="/economiaClickeable/Flecha.png" width={108} height={50} />
                            </div>
                        </Row>
                        <Row>
                            <div className="mt-25 ml-35">
                                <Image src="/economiaClickeable/Flecha.png" width={108} height={50} />
                            </div>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <div className="card mt-40">
                                <Image src="/economiaClickeable/Icono-ecosistema.png" width={65} height={65} className="mt-icon-card" />
                                <div className="card-padding">
                                    <h4 className="text-center">Ecosistema Arcalia</h4>
                                    <Container>
                                        <Col>
                                            <Image src="/economiaClickeable/flecha-izq-arriba.png" width={44} height={89}/>
                                        </Col>
                                        <Col>
                                            <Row>
                                                <h5 className="text-center">Demanda de servicios</h5>
                                            </Row>
                                            <Row>
                                                <h5 className="text-center">Oferta servicios técnicos</h5>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <Image src="/economiaClickeable/flecha-derecha-abajo.png" width={44} height={89}/>
                                        </Col>
                                    </Container>
                                </div>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}