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
        </div>
    )
}