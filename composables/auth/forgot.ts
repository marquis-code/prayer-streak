import { auth_api } from '@/api_factory/modules/auth'
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();

export const use_auth_forgot_password = () => {
	const Router = useRouter()
	const credential = {
		email: ref('')
	}

	const loading = ref(false)


	const disabled = computed(() => {
		return (
		  loading.value || !credential.email.value
		);
	  });

	const forgot_password = async () => {
		loading.value = true
		const res = (await auth_api.$_verify_email({
			email: credential.email.value
		})) as any

		console.log(res, 'resheer')

		loading.value = false
		if (res.status == 201) {
			showToast({
				title: "Success",
				message: "OTP was sent successfully.",
				toastType: "success",
				duration: 3000
			});
			Router.push('/verify-email?email=' + credential.email.value)
		} else {
			showToast({
				title: "Error",
				message: res.data?.error || 'Something went wrong.',
				toastType: "error",
				duration: 3000
			});
		}
	}

	const setObj = (data: any) => {
		credential.email.value = data.email
	}

	return { credential, forgot_password, loading, disabled, setObj }
}
