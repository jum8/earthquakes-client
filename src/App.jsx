import 'bootstrap/dist/css/bootstrap.min.css'
import { useCallback, useEffect, useState } from 'react'
import './App.css'
import axiosClient from './api/axiosClient'
import MyPagination from './components/MyPagination'
import { Row, Col, Container } from 'react-bootstrap'
import FeatureCard from './components/FeatureCard'

function App() {
  const [data, setData] = useState({});
  const [page, setPage] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosClient.get("/features", { params: {page, per_page: 12}});
        setData({ features: res.data, totalPage: res.pagination.total })
        console.log(res)
      } catch (error) {
        console.log(error);
      }
    }

    fetchData()

  }, [page])

  const handleChangePage = useCallback((page) => {
    setPage(page);
  }, [])

  return (
    <Container>
      <Container className='d-flex flex-wrap gap-1'>
        {data.features && data.features.length > 0 && data.features.map(item =>
          <Col key={item.id}>
          <FeatureCard item={item} />
          </Col>
        )}
      </Container>
      <Container className='my-8'>
      {
        data.totalPage > 1 && (
          <MyPagination
            total={data.totalPage}
            current={page}
            onChangePage={handleChangePage}
          />
        )
      }
      </Container>
    </Container>
  )
}

export default App
