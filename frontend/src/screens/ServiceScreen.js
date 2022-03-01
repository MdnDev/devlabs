import React from 'react'
import { Button, Col, Row, Card, Container } from 'react-bootstrap'

const ServiceScreen = () => {
  return (
    <Container className="my-5" >
      <Row className="my-5">
        <Row xs="12" sm="12" md="12" lg="12" xl="12">
          <h1>Design </h1>
          <br/>
          <h4>Blog, Ecommerce ou Portfolio, Je suis là pour vous.</h4>
        </Row>
        <Row className="my-3" xs="12" sm="12" md="12" lg="12" xl="12">
          <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src='../../images/webdev.png' className="mx-auto my-3" style={{ width: '8rem' }} />
              <Card.Body>
                <Card.Title>Developpement</Card.Title>
                <Card.Text>
                  Je dévevoppe votre site de manière à ce que vous ayez le moins possible a gérer, et vous concentrer uniquement sur votre activité.
                </Card.Text>
                <Button style={{backgroundColor: '#1d804d', fontFamily: 'Russo One, serif'}}>Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>


            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='../../images/branding.png' className="mx-auto my-3" style={{ width: '8rem' }} />
                <Card.Body>
                    <Card.Title>Design stratégique</Card.Title>
                    <Card.Text>
                      Je prends en comtpe toutes vos idées, vos souhaits, vos objectifs, et met en place une stratégie de design pour obtenir le meilleur résulat.
                    </Card.Text>
                    <Button style={{backgroundColor: '#1d804d', fontFamily: 'Russo One, serif'}}>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='../../images/seo.png' className="mx-auto my-3" style={{ width: '8rem' }} />
                <Card.Body>
                    <Card.Title>Service SEO</Card.Title>
                    <Card.Text>
                      J'apporte à votres site les outils nécessaires pour augmenter sa visibilité et position sur les moteurs de recherche.
                    </Card.Text>
                    <Button style={{backgroundColor: '#1d804d', fontFamily: 'Russo One, serif'}}>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
        </Row>
      </Row>

        {/* SECOND SECTION */}
        <Row className="my-5" >
        <Row xs="12" sm="12" md="12" lg="12" xl="12">
          <h1>Quelques technologies que j'utilise</h1>
          <br/>
          <h4>Du côté client au côté serveur, ces outils m'apportent les meilleurs résultats</h4>
        </Row>
        <Row className="my-3" xs="12" sm="12" md="12" lg="12" xl="12">
            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src='../../images/html5.png' className="mx-auto my-3" style={{ width: '8rem' }} />
              <Card.Body>
                  <Card.Title>HTML</Card.Title>
                  <Card.Text>
                  HTML est la structure de votre site. Le développement commence par HTML. Avec ceci, je fais également en sorte que votre site soit accessibles a tout types de publique, y compris ceux ayant un handicap.
                  </Card.Text>
                  <Button style={{backgroundColor: '#1d804d', fontFamily: 'Russo One, serif'}}>Go somewhere</Button>
              </Card.Body>
            </Card>
            </Col>

            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='../../images/css3.png' className="mx-auto my-3" style={{ width: '8rem' }} />
                <Card.Body>
                    <Card.Title>CSS</Card.Title>
                    <Card.Text>
                    CSS est l'esthetique de votre site. CSS me permet d'apporter a votre site la touche qui rendra agréable la visite de vos clients et potentiels clients sur votre site peut importe la taille de leur écran. Ceci est primordial pour l'experience du visiteur.
                    </Card.Text>
                    <Button style={{backgroundColor: '#1d804d', fontFamily: 'Russo One, serif'}}>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='../../images/react.png' className="mx-auto my-3" style={{ width: '8rem' }} />
                <Card.Body>
                    <Card.Title>REACT</Card.Title>
                    <Card.Text>
                    REACT est une librarie Javascript, me permettant d'ajouter de l'interactivté a votre site de manière rapide et efficace. Toute informations mise à jour (panier, like, commentaire), ne nécessite pqs un rafraichissment de la page.
                    </Card.Text>
                    <Button style={{backgroundColor: '#1d804d', fontFamily: 'Russo One, serif'}}>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='../../images/database.png' className="mx-auto my-3" style={{ width: '8rem' }} />
                <Card.Body>
                    <Card.Title>MONGODB</Card.Title>
                    <Card.Text>
                      MongoDB me permet d'établir une base de donnée de manière simple et efficace. Cela permet a votre site/application de de lire et modifier les donnés selon vos besoins.
                    </Card.Text>
                    <Button style={{backgroundColor: '#1d804d', fontFamily: 'Russo One, serif'}}>Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
        </Row>
      </Row>
        {/* END OF SECOND SECTION */}

        {/* THIRD SECTION */}
        <Row className="my-5">
          <Row xs="12" sm="12" md="12" lg="12" xl="12">
            <h1>Services Additionels</h1>
            <br/>
            <h4>Lorem Ipsum est simplement du faux texte</h4>
          </Row>
          <Row className="my-3" xs="12" sm="12" md="12" lg="12" xl="12">
            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src='../../images/shopify.png' className="mx-auto" style={{ width: '8rem' }} />
              <Card.Body>
                  <Card.Title>Shopify</Card.Title>
                  <Card.Text>
                  Je développe votre store shopify avec un thème personalisé pour plus de ventes.
                  </Card.Text>
                  <Button style={{backgroundColor: '#1d804d', fontFamily: 'Russo One, serif'}}>En savoir plus</Button>
              </Card.Body>
            </Card>
            </Col>

            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='../../images/email.png' className="mx-auto" style={{ width: '8rem' }} />
                <Card.Body>
                    <Card.Title>Email Marketing</Card.Title>
                    <Card.Text>
                      Je peux gérér vos newsletter et autres campagne marketing que souhaitez développer par Mail pour accroître votre visibilité.
                    </Card.Text>
                    <Button style={{backgroundColor: '#1d804d', fontFamily: 'Russo One, serif'}}>En savoir plus</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='../../images/blog.png' className="mx-auto" style={{ width: '8rem' }} />
                <Card.Body>
                    <Card.Title>Articles blogs</Card.Title>
                    <Card.Text>
                    Je m'occupe d'alimenter votre blog avec les thèmes que vous souhaitez voir abordés sur votre site, pour encore plus d'engagement avec vos clients.
                    </Card.Text>
                    <Button style={{backgroundColor: '#1d804d', fontFamily: 'Russo One, serif'}}>En savoir plus</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='../../images/media.png' className="mx-auto" style={{ width: '8rem' }} />
                <Card.Body>
                    <Card.Title>Service SEO</Card.Title>
                    <Card.Text>
                    Je gère vos divers comptes professionels pour accroître l'engagement avec clients et potentiels clients.
                    </Card.Text>
                    <Button style={{backgroundColor: '#1d804d', fontFamily: 'Russo One, serif'}}>En savoir plus</Button>
                </Card.Body>
              </Card>
            </Col>
        </Row>
          </Row>
        {/* END OF THIRD SECTION */}

        
        



    </Container>
  )
}

export default ServiceScreen