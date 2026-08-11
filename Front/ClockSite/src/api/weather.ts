export interface weatherDto {
    data: Date;
    temperatureC: number;
    summary: string;
    temperatureF: number
}
export const getData = async(): Promise<weatherDto[] | null> => {
    const response = await fetch("http://localhost:5233/weatherforecast");
    if(!response.ok){
        throw new Error("Балбес")       
    }
    return response.json()
    
}