import { GATEWAY_ENDPOINT } from "../axios.config";

export const streak_api = {
    $_fetch_streaks: () => {
        const url = '/streak';
        return GATEWAY_ENDPOINT.get(url);
      },
      $_delete_streak: (id: string | number) => {
        const url = `/streak/${id}`;
        return GATEWAY_ENDPOINT.delete(url);
      },
      $_create_streak: ( payload: any) => {
        const url = '/streak';
        return GATEWAY_ENDPOINT.post(url, payload);
      },
      $_update_streak: (id: string | number, payload: any) => {
        const url = `/streak/${id}`;
        return GATEWAY_ENDPOINT.patch(url, payload);
      },
      $_update_streak_status: (id: string | number, payload: any) => {
        const url = `/streak/${id}/status`;
        return GATEWAY_ENDPOINT.get(url, payload);
      }
};
