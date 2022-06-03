import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from 'recoil'

export const fontSizeState = atom({
	key: 'fontSizeState',
	default: 14,
})
