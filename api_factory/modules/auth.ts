import { GATEWAY_ENDPOINT, GATEWAY_ENDPOINT_V2 } from '../axios.config'
import { useUser } from '@/composables/auth/user'

export const auth_api = {
	 $_register: (credential: any) => {
		const url = '/auth/signup'
		return GATEWAY_ENDPOINT.post(url, credential)
	},
	$_login: (credential: any) => {
		const url = '/auth/login'
		return GATEWAY_ENDPOINT.post(url, credential)
	},
	$_reset_password: (credential: any) => {
		const url = '/tenants/password-reset/verify'
		return GATEWAY_ENDPOINT_V2.patch(url, credential)
	},
	$_confirm_otp: (credential: any) => {
		const url = '/auth/email-verification/verify'
		return GATEWAY_ENDPOINT.patch(url, credential)
	},
	$_verify_email: (payload:any) => {
		const url = '/auth/email-verification/initiate'
		return GATEWAY_ENDPOINT.post(url, payload)
	},
	$_fetch_profile: () => {
		const url = '/tenants/profile'
		return GATEWAY_ENDPOINT.get(url);
  },
  $_update_profile: (payload: any) => {
	const url = '/tenants/profile'
	return GATEWAY_ENDPOINT.patch(url, payload);
},
$_change_password: (payload: any) => {
	const url = '/tenants/password'
	return GATEWAY_ENDPOINT.patch(url, payload);
}
}
