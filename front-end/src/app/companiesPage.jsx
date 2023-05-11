import { useEffect, useState, useContext } from 'react'
import { UserContext } from "./userContext";
import CompaniesService from '../services/companies.service'

export function CompaniesPage() {
  const { setUserinfo, userinfo } = useContext(UserContext);
  const [data, setData] = useState([]);

  const getData = async () =>{
    console.log(userinfo)
    const companies = await CompaniesService.getAll();
    setData(companies);
  }

  useEffect(() => {
    getData();
  }, [])

  // const showMore () => {

  // }

  return (
    <div style={{display:'list-item',fontSize:'25px'}}>
      {data.map((company) => (
        <div key={company.name} style={{display:'flex',flexDirection:'row',
        justifyContent:'space-between', padding:'10px'}}>
          <span>{company.name}</span>
          <span>{company.size}</span>
          <span>{company.location}</span>
          <a href={company.website}>website</a>
          <button style={{border:'none',backgroundColor:'lightblue'}}>more details</button>
        </div>
      ))}
    </div>
  )
}