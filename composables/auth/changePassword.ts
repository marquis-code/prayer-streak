// import { auth_api } from '@/api_factory/modules/auth'
// import { useCustomToast } from '@/composables/core/useCustomToast'
// import { ref, computed } from 'vue';
// import { useRouter } from 'vue-router';

// export const use_change_password = () => {
// 	const { showToast } = useCustomToast();
// 	const Router = useRouter();
// 	const credential = {
// 		currentPassword: ref(''),
// 		newPassword: ref(''),
// 		confirmPassword: ref(''),
// 	};

// 	const loading = ref(false);

// 	const passwordMismatch = computed(() => {
// 		return credential.newPassword.value !== credential.confirmPassword.value;
// 	});

// 	const currentPasswordSameAsNew = computed(() => {
// 		return credential.currentPassword.value === credential.newPassword.value;
// 	});

// 	const errorMessage = computed(() => {
// 		if (loading.value) {
// 			return 'Processing your request...';
// 		}
// 		if (!credential.currentPassword.value) {
// 			return 'Current password is required.';
// 		}
// 		if (!credential.newPassword.value) {
// 			return 'New password is required.';
// 		}
// 		if (!credential.confirmPassword.value) {
// 			return 'Please confirm your new password.';
// 		}
// 		if (passwordMismatch.value) {
// 			return 'New password and confirmation do not match.';
// 		}
// 		if (currentPasswordSameAsNew.value) {
// 			return 'New password cannot be the same as the current password.';
// 		}
// 		return ''; // No error
// 	});

// 	const disabled = computed(() => {
// 		return (
// 			loading.value ||
// 			!credential.currentPassword.value ||
// 			!credential.newPassword.value ||
// 			!credential.confirmPassword.value ||
// 			passwordMismatch.value ||  // Check for password mismatch
// 			currentPasswordSameAsNew.value // Check if current password is the same as new password
// 		);
// 	});

// 	const change_password = async () => {
// 		loading.value = true;
// 		try {
// 			const res = (await auth_api.$_change_password({
// 				currentPassword: credential.currentPassword.value,
// 				newPassword: credential.newPassword.value,
// 			})) as any;

// 			loading.value = false;

// 			if (res.type !== 'ERROR') {
// 				showToast({
// 					title: "Success",
// 					message: 'Password was updated successfully.',
// 					toastType: "success",
// 					duration: 3000
// 				  });
// 				localStorage.clear();
// 				Router.push('/profile/password-change-success');
// 			} else {
// 				showToast({
// 					title: "Error",
// 					message: res?.data?.error || 'An error occurred while changing the password.',
// 					toastType: "error",
// 					duration: 3000
// 				  });
// 			}
// 		} catch (error: any) {
// 			loading.value = false;
// 			showToast({
// 				title: "Error",
// 				message: error.response?.data?.message || 'An unexpected error occurred. Please try again.',
// 				toastType: "error",
// 				duration: 3000
// 			  });
// 		}
// 	};

// 	return { credential, change_password, loading, disabled, errorMessage };
// };

import { auth_api } from '@/api_factory/modules/auth';
import { useCustomToast } from '@/composables/core/useCustomToast';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

export const use_change_password = () => {
  const { showToast } = useCustomToast();
  const Router = useRouter();
  const credential = {
    currentPassword: ref(''),
    newPassword: ref(''),
    confirmPassword: ref(''),
  };

  const loading = ref(false);

  const passwordMismatch = computed(() => {
    return credential.newPassword.value !== credential.confirmPassword.value;
  });

  const currentPasswordSameAsNew = computed(() => {
    return credential.currentPassword.value === credential.newPassword.value;
  });

  // Check if the new password or confirm password is less than 6 characters
  const passwordTooShort = computed(() => {
    return credential.newPassword.value.length < 6 || credential.confirmPassword.value.length < 6;
  });

  const errorMessage = computed(() => {
    if (loading.value) {
      return 'Processing your request...';
    }
    if (!credential.currentPassword.value) {
      return 'Current password is required.';
    }
    if (!credential.newPassword.value) {
      return 'New password is required.';
    }
    if (!credential.confirmPassword.value) {
      return 'Please confirm your new password.';
    }
    if (passwordTooShort.value) {
      return 'Password must be at least 6 characters long.';
    }
    if (passwordMismatch.value) {
      return 'New password and confirmation do not match.';
    }
    if (currentPasswordSameAsNew.value) {
      return 'New password cannot be the same as the current password.';
    }
    return ''; // No error
  });

  const disabled = computed(() => {
    return (
      loading.value ||
      !credential.currentPassword.value ||
      !credential.newPassword.value ||
      !credential.confirmPassword.value ||
      passwordMismatch.value || // Check for password mismatch
      passwordTooShort.value || // Check if password is too short
      currentPasswordSameAsNew.value // Check if current password is the same as the new password
    );
  });

  const change_password = async () => {
    loading.value = true;
    try {
      const res = (await auth_api.$_change_password({
        currentPassword: credential.currentPassword.value,
        newPassword: credential.newPassword.value,
      })) as any;

      loading.value = false;

      if (res.type !== 'ERROR') {
        showToast({
          title: 'Success',
          message: 'Password was updated successfully.',
          toastType: 'success',
          duration: 3000,
        });
        localStorage.clear();
        Router.push('/profile/password-change-success');
      } else {
        showToast({
          title: 'Error',
          message: res?.data?.error || 'An error occurred while changing the password.',
          toastType: 'error',
          duration: 3000,
        });
      }
    } catch (error: any) {
      loading.value = false;
      showToast({
        title: 'Error',
        message: error.response?.data?.message || 'An unexpected error occurred. Please try again.',
        toastType: 'error',
        duration: 3000,
      });
    }
  };

  return { credential, change_password, loading, disabled, errorMessage };
};
