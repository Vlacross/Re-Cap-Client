import configureMockStore from 'redux-mock-store';



const authStore = () => ({
  token: null,
	user: null,
	loading: false,
	error: null,
	protectedAccount: null
});

const staticStore = () => ({
  bio: {
    bio: {
      who: 'who',
      what: 'what',
      when: 'when',
      where: 'where',
      whoNow: 'whoNow'
    }
  } 
});

const courseStore = () => ({
  courseList: [],
  course: null,
  error: null,
  loading: false
});

// const formStore = () => ({
//   appInfo: false,
//   isMobile: false,
//   menuOpen: false,
//   doubleCheck: {
//     isOpen: false,
//     checkingFor: ''
//   },
//   showPass: false
// })

const viewStore = () => ({
  appInfo: false,
  isMobile: false,
  menuOpen: false,
  doubleCheck: {
    isOpen: false,
    checkingFor: ''
  },
  showPass: false
});

const state = () => ({
  auth: mockStore(authStore),
  bio: mockStore(staticStore),
  courses: mockStore(courseStore),
  // form: mockStore(formStore),
  views: mockStore(viewStore)
});

let mockStore = configureMockStore();

export const mockAuthStore = (mockStore(authStore));

export const mockStaticStore = (mockStore(staticStore));

export const mockCourseStore = (mockStore(courseStore));

export const mockViewStore = (mockStore(viewStore));

export const mockStateStore = (mockStore(state));

