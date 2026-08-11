import { useQuery } from "@tanstack/react-query"
import {getData} from "../../../api/weather"
export const Main = () => {
    const{data:data, isLoading, isError} = useQuery({queryKey:["data"],queryFn: getData})
    if(isError){
        return<>!♥</>
    }
    if(isLoading){
        return<>♥</>
    }
  return (
    <div style={{ padding: '40px', textAlign: 'center', width: '100%' }}>
      <h2>⏰ Это MAIN!!!!!!!!</h2>
      <p>{data? data[0]?.summary : "Нема"}</p>
    </div>
  )
}
