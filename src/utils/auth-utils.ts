import { useStore } from '@/hooks/useStore';
import { localize } from '@deriv-com/translations';
import { requestOidcAuthentication as requestOidcAuthenticationBase } from '@deriv-com/auth-client';

/**
 * Clears authentication data from local storage and reloads the page
 */
export const clearAuthData = (is_reload: boolean = true): void => {
    localStorage.removeItem('accountsList');
    localStorage.removeItem('clientAccounts');
    localStorage.removeItem('callback_token');
    localStorage.removeItem('authToken');
    localStorage.removeItem('active_loginid');
    localStorage.removeItem('client.accounts');
    localStorage.removeItem('client.country');
    sessionStorage.removeItem('query_param_currency');
    if (is_reload) {
        location.reload();
    }
};

/**
 * Handles OIDC authentication failure by clearing auth data and showing logged out view
 * @param error - The error that occurred during OIDC authentication
 */
export const handleOidcAuthFailure = (error: any) => {
    console.error('[OIDC] Authentication failure:', error);
    const { common } = useStore();
    common?.setError({
        header: localize('Authentication failed'),
        message: localize('We were unable to authenticate your account. Please try again.'),
        redirect_label: localize('Try again'),
        redirectOnClick: () => window.location.reload(),
    });

    // Reload the page to show the logged out view
    window.location.reload();
};
