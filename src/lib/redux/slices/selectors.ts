/* Instruments */
import type { ReduxState } from '@/lib/redux';

export const selectCount = (state: ReduxState) => state.counter.value;