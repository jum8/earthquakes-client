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
        const res = await axiosClient.get("/features", { params: {page, per_page: 10}});
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
    <div>

      <Row xs={1} md={2} lg={4} className="g-4" >
        {data.features && data.features.length > 0 && data.features.map(item =>
          <Col key={item.id}>
          <FeatureCard item={item} />
          </Col>
        )}
      </Row>
      {
        data.totalPage > 1 && (
          <MyPagination
            total={data.totalPage}
            current={page}
            onChangePage={handleChangePage}
          />
        )
      }
    </div>
  )
}

export default App
