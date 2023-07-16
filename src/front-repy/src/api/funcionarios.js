import {base} from './base'

export const getFuncionarios = async ({bearer}) => {
    
    try {
        let response = await fetch(`${base}/funcionario/`, {
          method: 'GET',
          headers: {
            'Content-type' : 'application/json',
            'Authorization' : 'Bearer ' + bearer
          },
        });
        let data = await response.json();
        if(response.status === 200) {
            return data
        } else {
            throw new Error('Error: requisição de dados.')
        }
    } catch (error) {
        console.log(error)
        throw error;
    }
}    

