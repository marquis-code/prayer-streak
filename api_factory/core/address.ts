import { GATEWAY_ENDPOINT } from '../axios.config'
export const address_api = {
	$_get_cities: (countryCode: string, stateCode: any) => {
		const url = `/utilities/countries/${countryCode}/states/${stateCode}/cities`
		return GATEWAY_ENDPOINT.get(url)
	},
	$_get_states: () => {
		const url = `/utilities/countries/NG/states`
		return GATEWAY_ENDPOINT.get(url)
	}
}
