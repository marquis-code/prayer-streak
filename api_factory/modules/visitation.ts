import { GATEWAY_ENDPOINT } from "../axios.config";

export const visitation_api = {
    $_fetch_visitations: (tenantId: string | number, houseId: string | number) => {
        const url = `/visitations?tenantId=${tenantId}&houseId=${houseId}`;
        return GATEWAY_ENDPOINT.get(url);
      },
      $_delete_visitation: (id: string | number) => {
        const url = `/visitations/${id}`;
        return GATEWAY_ENDPOINT.delete(url);
      },
      $_create_visitation: (id: string | number, payload: any) => {
        const url = `/houses/${id}/visitations`;
        return GATEWAY_ENDPOINT.post(url, payload);
      },
      $_get_availability_time_in_selected_day: (houseId: string | number, dayId: string | number) => {
        const url = `/houses/${houseId}/visitations/days/${dayId}/times`;
        return GATEWAY_ENDPOINT.get(url);
      },
      $_get_house_availability_by_id: (houseId: string | number) => {
        const url = `/houses/${houseId}/visitations/availability-days`;
        return GATEWAY_ENDPOINT.get(url);
      }
};
