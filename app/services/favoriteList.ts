import { apiClient } from 'services/client';
import ApiConfig from 'config/api-config';

export default function favoriteList() {
    return apiClient.get(ApiConfig.FAVORITE_LIST);
}
