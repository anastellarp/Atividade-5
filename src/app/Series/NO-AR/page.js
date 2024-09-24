'use client';

import { Button, Card, CardBody, CardFooter, CardTitle, Col, Row } from "react-bootstrap";
import Pagina from "../componets/Pagina";
import { useEffect, useState } from "react";
import apiFilmes from "../API/api";


export default function Page() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    buscarSeries();
  }, []);

  async function buscarSeries() {
    const result = await apiFilmes.get("/tv/on_the_air?language=pt-BR");
    console.log(result.data.results);
    const seriesRecebidas = result.data.results;
    setSeries(seriesRecebidas);
  }

  return (
    <Pagina titulo="Exibidas Hoje">
      <Row md={4}>
        {series.map(series => (
          <Col className="py-2" key={series.id}>
            <Card style={{ height: '100%' }}>
              <Card.Img src={`https://image.tmdb.org/t/p/w500/${series.poster_path}`} />
              <CardBody>
                <CardTitle>
                  {series.original_name}
                  <p>
                    <b>Nota:</b> {series.vote_average} ⭐
                  </p>
                </CardTitle>
              </CardBody>
              <CardFooter className="text-end">
                <Button href={`/Series/${series.id}`}>Detalhes</Button>
              </CardFooter>
            </Card>
          </Col>
        ))}
      </Row>
    </Pagina>
  );
}
