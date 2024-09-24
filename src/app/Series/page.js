'use client';

import { Button, Card, CardBody, CardFooter, CardTitle, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import apiFilmes from "./API/api";
import Pagina from "./componets/Pagina";

export default function page() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetchSeries();
  }, []);

  async function fetchSeries() {
    const response = await apiFilmes.get("/tv/popular?language=pt-BR");
    const seriesData = response.data.results;
    setSeries(seriesData);
  }

  return (
    <Pagina titulo="Séries Populares">
      <Row md={4}>
        {series.map((serie) => (
          <Col className="py-2" key={serie.id}>
            <Card style={{ height: '100%' }}>
              <Card.Img src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} />
              <CardBody>
                <CardTitle>
                  {serie.original_name}
                  <p>
                    <b>Nota:</b> {serie.vote_average} ⭐
                  </p>
                </CardTitle>
              </CardBody>
              <CardFooter className="text-end">
                <Button href={`/Series/${serie.id}`}>Detalhes</Button>
              </CardFooter>
            </Card>
          </Col>
        ))}
      </Row>
    </Pagina>
  );
}
