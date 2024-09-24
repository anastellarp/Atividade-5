'use client'

import { Button, Card, CardBody, CardFooter, CardTitle, Col, Row } from "react-bootstrap";
import Pagina from "../componets/Pagina";
import { useEffect, useState } from "react";
import apiFilmes from "../API/api";

export default function page() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    buscarSeries();
  }, []);

  async function buscarSeries() {
    const result = await apiFilmes.get("/tv/top_rated?language=pt-BR");
    console.log(result.data.results);
    const seriesRecebidas = result.data.results;
    setSeries(seriesRecebidas);
  }

  return (
    <Pagina titulo="Séries Avaliadas">
      <Row md={4}>
        {series.map(series => {
          return (
            <Col className="py-2">
              <Card style={{ height: '100' }}>
                <Card.Img src={"https://image.tmdb.org/t/p/w500/" + series.poster_path} />
                <CardBody>
                  <CardTitle>
                    {series.original_name}
                    <p>
                      <b>Nota:</b>
                      {series.vote_average}  ⭐
                    </p>
                  </CardTitle>
                </CardBody>
                <CardFooter className="text-end">
                  <Button href={"/Series/" + series.id}>Detalhes</Button>
                </CardFooter>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Pagina>
  )
}
