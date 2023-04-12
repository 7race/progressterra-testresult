import { createSlice } from '@reduxjs/toolkit';
import { createToken } from '../../services/createToken';
import { getBonusInfo } from '../../services/getBonusInfo';
import type { BonusInfo } from '../../services/getBonusInfo';
import type { AppDispatch } from '../../store';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface BonusInfoState {
  isLoading: boolean;
  userToken: string;
  currentQuantity: number | null;
  dateBurning: string;
  forBurningQuantity: number | null;
  error: string | null;
}

const initialState: BonusInfoState = {
  isLoading: false,
  userToken: '',
  currentQuantity: null,
  dateBurning: '',
  forBurningQuantity: null,
  error: null,
};

export const bonusInfoSlice = createSlice({
  name: 'bonusInfo',
  initialState,
  reducers: {
    setLoaderOn: (state) => {
      state.isLoading = true;
    },
    setLoaderOff: (state) => {
      state.isLoading = false;
    },
    setUserToken: (
      state,
      { payload }: PayloadAction<BonusInfoState['userToken']>
    ) => {
      state.userToken = payload;
    },
    setDataError: (
      state,
      { payload }: PayloadAction<BonusInfoState['error']>
    ) => {
      state.error = payload;
    },
    setBonusDataInfo: (
      state,
      { payload }: PayloadAction<BonusInfo['data']>
    ) => {
      state.currentQuantity = payload.currentQuantity;
      state.dateBurning = payload.dateBurning;
      state.forBurningQuantity = payload.forBurningQuantity;
    },
  },
});

export const {
  setLoaderOn,
  setLoaderOff,
  setUserToken,
  setDataError,
  setBonusDataInfo,
} = bonusInfoSlice.actions;

export const bonusInfoReducer = bonusInfoSlice.reducer;

export const createUserToken = () => async (dispatch: AppDispatch) => {
  try {
    const { accessToken } = await createToken();
    dispatch(setUserToken(accessToken));
    return accessToken;
  } catch (error) {
    if (error instanceof Error) {
      dispatch(setDataError(error.message));
    } else {
      dispatch(setDataError('An unknown error occurred'));
    }
  }
};

export const setBonusInfo =
  (userToken: string) => async (dispatch: AppDispatch) => {
    try {
      const { currentQuantity, dateBurning, forBurningQuantity } =
        await getBonusInfo(userToken);

      dispatch(
        setBonusDataInfo({ currentQuantity, dateBurning, forBurningQuantity })
      );
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setDataError(error.message));
      } else {
        dispatch(setDataError('An unknown error occurred'));
      }
    }
  };
