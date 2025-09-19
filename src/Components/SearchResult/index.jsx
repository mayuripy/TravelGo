import React from "react";


export default function SearchResults(){
   
    const buses=[
            {
                 id:1,
                 operator:"VRL TRAVEL",
                 arrival:"05:30 PM",
                 duration: "8h",
                 price: "899",
                 seats: "12L",
                 type:"sleeper AC"
            },
             {
                 id:2,
                 operator:"SANGITM TRAVEL",
                 arrival:"07:30 PM",
                 duration: "8h 45M",
                 price: "780",
                 seats: "4U",
                 type:"sleeper AC"
            },
            {
                 id:3,
                 operator:"SAIRAM TRAVEL",
                 arrival:"08:30 PM",
                 duration: "8h 45M",
                 price: "1200",
                 seats: "13U",
                 type:"sleeper AC"
            }

        ]


    return(
        
        <container className="my-4">
            <div className="mb-4">
               <h4 className="fw-bold text-danger">Mumbai --- pune</h4>
               <p className="text-muted">Journy Date:21 sept 2025</p>
            </div>

          <Row className="g-4">
        {buses.map((bus) => (
          <Col md={12} key={bus.id}>
            <Card className="shadow-sm border-0 p-3">
              <Row className="align-items-center">
                <Col md={3}>
                  <h5 className="fw-bold mb-1">{bus.operator}</h5>
                  <small className="text-muted">{bus.type}</small>
                </Col>

                <Col md={2} className="text-center">
                  <h6 className="mb-0 fw-semibold">{bus.departure}</h6>
                  <small className="text-muted">Departure</small>
                </Col>

                <Col md={2} className="text-center">
                  <h6 className="mb-0">{bus.duration}</h6>
                  <small className="text-muted">Duration</small>
                </Col>

                <Col md={2} className="text-center">
                  <h6 className="mb-0 fw-semibold">{bus.arrival}</h6>
                  <small className="text-muted">Arrival</small>
                </Col>

                <Col md={1} className="text-center">
                  <h6 className="text-success fw-bold mb-0">{bus.seats}</h6>
                  <small className="text-muted">Seats</small>
                </Col>

                <Col md={2} className="text-center">
                  <h5 className="fw-bold text-danger">{bus.price}</h5>
                  <Button variant="danger" size="sm">
                    Book Now
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>

        </container>
    )
}