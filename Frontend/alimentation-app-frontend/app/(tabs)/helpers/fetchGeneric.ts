type HttpMethod = "GET" | "POST"; 

type FetchHeaders = { [key: string]: string }; 

type FetchResponse = any | string;

export const fetchGeneric = async (
  url: string, 
  method: HttpMethod = "GET", 
  headers: FetchHeaders = {}, 
  body: string = ""
): Promise<FetchResponse> => {
    try {
        let response: Response;
        
        if (method === "GET") {
            response = await fetch(url, { method, headers });
        } else if (method === "POST") {
            response = await fetch(url, { method, headers, body });
        } else {
            throw new Error("Método HTTP no soportado.");
        }

        let data = null;
        if (!response.ok) {
            if (response.status === 409) {
                data = "Error DNI ya registrado";
                return data;
            }
            return data;
        }

        data = await response.json();
        return data;

    } catch (error) {
        throw new Error("Error en la petición");
    }
};