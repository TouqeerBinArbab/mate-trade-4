let initialState = {

  auth: {
      user: null,
      token: null
  },
  graphData: [],
  faq: [],
  isLoading: false,
  isLandscapeLoading: false,
  profile:{
      country:[],
      state:[],
      city:[],
      skiShop:[],
      boat:[],
      skiBrand:[],
      boatDealer:[],
      lake:[],
      equipment_type:[]
  },
  eventDetail:{
      eventName:'',
      startDate:'',
      endDate:'',
      startTime:'',
      endTime:'',
      sportsName:'',
      discipline:'',
      ageGroup:'',
      ngbName:''
  },
  sports:{
  name:"",
  icon:"",
  disciplines:[]
  },
  
  ngBody: {
      name: "",
      id: "",
  },
  disciplines:{
      name:"",
      type:"",
      coming_soon:false,
      },
  ageGroup:{
      gender:"",
      age_range:"",
  },
  cancelEvent:{},
  event:{
      name:"",
      startDate:"",
      endDate:"",
      startTime:"",
  },
  logout: { 
      user: '',
      token: ''
  },

  additionalField: {},
  createEvent: {},
  updateStatus: {},
  eventField:{},
  activity:{},
  leaderboard:{},
  ranks:{},
  playerDashboard:{},
  feedBack:{},
};

export default initialState;
