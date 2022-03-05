import React from 'react'
import { Container, Card, Col, Row } from 'react-bootstrap'

const Portfolio = () => {
  return (
    <Container>
        <h1 className='py-3'>Quelques projets</h1>
        <Col style={{ display: 'inline-block' }}>
            <Col style={{ display: 'inline-block' }} className="my-3" xs={12} sm={12} md={6} lg={6} xl={4}>
                <Card className="mt-5 mx-auto" style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="../../images/jnphotography.gif" />
                    <Card.Body>
                        <Card.Title><h4>Jean-Noël Vireeye</h4></Card.Title>
                        <Card.Text>
                        Une application Web développée afin de permettre à un photographe professionel de promouvoir son travail.
                        <br></br>
                        Un système de paiement a été implémenté à l'application, ainsi qu'un système d'authentification & espace administrateur.
                        <br></br>
                        Les technologies MongoDB, Express, React et Node ont été utilisées pour cette application.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col style={{ display: 'inline-block' }} className="my-3" xs={12} sm={12} md={6} lg={6} xl={4}>
                <Card className="mt-5 mx-auto" style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="../../images/lms.gif" />
                    <Card.Body>
                        <Card.Title><h4>Light Multi Services</h4></Card.Title>
                        <Card.Text>
                        Une application Web développée afin de promouvoir le matériel éléctrique d'une entreprise de location.
                        <br></br>
                        Un système d'authentification & espace administrateur ont été implémentés à l'application.
                        <br></br>
                        Les technologies MongoDB, Express, React et Node ont été utilisées pour cette application.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col style={{ display: 'inline-block' }} className="my-3" xs={12} sm={12} md={6} lg={6} xl={4}>
                <Card className="mt-5 mx-auto" style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="../../images/wilfriedmaudon.gif"/>
                    <Card.Body>
                        <Card.Title><h4>Wilfried Maudon</h4></Card.Title>
                        <Card.Text>
                        Ceci est mon premier site, crée pour promouvoir mes premiers projets.
                        <br></br>
                        Ce site présente mes compétences en tant que développeur fullstack et permet a l'utilisateur de me contacter.
                        <br></br>
                        HTML, CSS & Javascript ont été utilisés pour ce site.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col style={{ display: 'inline-block' }} className="my-3" xs={12} sm={12} md={6} lg={6} xl={4}>
                <Card className="mt-5 mx-auto" style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="../../images/sorbet.gif" />
                    <Card.Body>
                        <Card.Title><h4>Royaume Sorbet</h4></Card.Title>
                        <Card.Text>
                        Ce site est un projet personnel montrant mes compétences avec la bibliothèque Bootstrap 5, HTML & CSS.
                        Ce site (fictif) propose à l'utilisateur de d'explorer les differents sorbets proposés.
                        <br></br>
                        Une carte à été ajoutée à la page contact afin de donner plus d'informations à l'utilisateur.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col style={{ display: 'inline-block' }} className="my-3" xs={12} sm={12} md={6} lg={6} xl={4}>
                <Card className="mt-5 mx-auto" style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="../../images/guitare.gif" />
                    <Card.Body>
                        <Card.Title><h4>E-commerce guitares</h4></Card.Title>
                        <Card.Text>
                        Ceci est un projet personnel crée a partir du stack MERN.
                        <br></br>
                        Une base de donnée a été implémentée via MongoDB & Express, l'interface via React.js.
                        <br></br>
                        Le logiciel propose à l'utilisateur de choisir différentes guitare, et compléter sa commande.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Col>
    </Container>
  )
}

export default Portfolio