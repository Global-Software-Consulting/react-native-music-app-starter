import { apiClient } from 'services/client';
import ApiConfig from 'config/api-config';

export default function musicList() {
    return apiClient.get(ApiConfig.MUSIC_LIST);
}
