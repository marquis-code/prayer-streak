import { GATEWAY_ENDPOINT } from '../axios.config'

export const utilities_apis = {
	$_contacts: () => {
		const url = '/contacts'
		return GATEWAY_ENDPOINT.get(url)
	}
}
