import { apiClient } from 'services/client';
import ApiConfig from 'config/api-config';

export default function loading() {
    return apiClient.get(ApiConfig.MUSIC_LIST);
}
