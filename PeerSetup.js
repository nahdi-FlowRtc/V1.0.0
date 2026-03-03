/**
 * -------------------------------------------------------------
 * PeerSetup
 * -------------------------------------------------------------
 * Author: Ghaith Nahdi
 * @github https://github.com/devtunis
 * License: MIT
 * 
 * A lightweight WebRTC helper class that simplifies
 * browser-to-browser video connections.
 *
 * It handles:
 *  - Camera & microphone initialization
 *  - Adding local and remote tracks
 *  - ICE candidate buffering
 *  - Offer/Answer negotiation
 *  - Graceful cleanup
 *
 * Internally uses:
 *  - RTCPeerConnection
 *  - MediaDevices.getUserMedia()
 *
 * @see https://developer.mozilla.org/docs/Web/API/RTCPeerConnection
 */
class DeclarePeerType {

  /**
   * Creates a new PeerSetup instance.
   *
   * @param {Object} options
   * @param {HTMLVideoElement} options.localVideoRef - Local video element.
   * @param {HTMLVideoElement} options.remoteVideoRef - Remote video element.
   * @param {RTCConfiguration} [options.rtcConfig] - RTCPeerConnection configuration.
   * @param {MediaStreamConstraints} [options.constraint] - getUserMedia constraints.
   */
  constructor(options) { }

  /**
   * Initializes camera, microphone, and peer event listeners.
   *
   * - Calls getUserMedia()
   * - Attaches local stream
   * - Registers ICE + track handlers
   *
   * @returns {Promise<void>}
   */
  async initializeVideoSession() {}

  /**   
   * Reinitializes a new RTCPeerConnection and media session.
   *
   * @returns {Promise<void>}
   */
  async initializeNewVideoSession() {}

  /**
   * Adds all local media tracks to the peer connection.
   *
   * Internally calls:
   * RTCPeerConnection.addTrack()
   *
   * @returns {void}
   */
  addlocaltracks() {}

  /**
   * Registers handler for remote track events.
   * Assigns remote MediaStream to remoteVideoRef.
   *
   * Triggered by:
   * RTCPeerConnection.ontrack
   *
   * @returns {void}
   */
  addremotetracks() {}

  /**
   * Creates an SDP offer and sets it as the local description.
   *
   * Uses:
   * - createOffer()
   * - setLocalDescription()
   *
   * @returns {Promise<RTCSessionDescription|null>}
 
   */
  async createOffer() {}

  /**
   * Accepts a remote offer and generates an SDP answer.
   *
   * Uses:
   * - setRemoteDescription()
   * - createAnswer()
   * - setLocalDescription()
   *
   * @param {RTCSessionDescriptionInit} offer
   * @returns {Promise<RTCSessionDescription|void>}
 
   */
  async createAnswer(offer) {}
  

  /**
   * Completes connection by setting remote answer.
   *
   * Uses:
   * - setRemoteDescription()
   *
   * @param {RTCSessionDescriptionInit} answer
   * @returns {Promise<void>}
   */
  async establishConnection(answer) {}

  /**
   * Adds a remote ICE candidate to the connection.
   *
   * Uses:
   * - addIceCandidate()
   *
   * @param {RTCIceCandidateInit} candidate
   * @returns {Promise<void>}
   */
  async handleRemoteIceCandidate(candidate) {}

  /**
   * Temporarily stores ICE candidates
   * until remote description is ready.
   *
   * @param {RTCIceCandidateInit} candidate
   * @returns {void}
   */
  SotreIce(candidate) {}

  /**
   * Flushes buffered ICE candidates.
   *
   * @returns {void}
   */
  eatMyStore() {}

  /**
   * Closes peer connection and stops all media tracks.
   *
   * - Stops MediaStream tracks
   * - Clears video elements
   * - Closes RTCPeerConnection
   *
   * @returns {void}
   */
  closeConnection() {}

  /**
   * Registers a custom event listener.
   *
   * @param {string} eventName
   * @param {Function} callback
   * @returns {void}
   */
  on(eventName, callback) {}

  /**
   * Removes a registered event listener.
   *
   * @param {string} eventName
   * @param {Function} callback
   * @returns {void}
   */
  off(eventName, callback) {}

  /**
   * Emits a custom event.
   *
   * @param {string} eventName
   * @param {*} [data]
   * @returns {void}
   */
  emit(eventName, data) {}


 
}



import {ANSWER_ERROR, ANSWER_ERROR_URL,CAMERA_ERROR_MSG,CAMERA_ERROR_Permission,CAMERA_ERROR_Permission_URL, CAMERA_ERROR_URL, ESTABLISH_ERORR,  ESTABLISH_ERROR_URL, JSON__ERROR, JSON__ERROR__URL, PASS_VIDEO_REF_ERROR_URL} from './ErrorMesage.js';
 
 
 

function throwSexyError(message,url,bg="#1A0D3F",color="#00CED1",linkbg="#1A0D3F") {
  console.log(
    "%c%s%c%s",
    `color:${color};background-color:${bg};font-weight:bold;font-size:20px;padding:6px;border-radius:6px`,
    message,
     `color:#4FC3F7;text-decoration:underline;background-color:${linkbg};font-size:18px;padding:6px`,
    "\n" + url
  );
}

function code(params){
    if(!parmas){
        throwSexyError(JSON__ERROR,JSON__ERROR__URL)
        return
    }
    return JSON.stringify(params)
}
function uncode(parmas){
    if(!parmas){
          throwSexyError(JSON__ERROR,JSON__ERROR__URL)
          return 
    }
    return JSON.parse(parmas)}


 
class PeerSetup {
 
  constructor(options) {

  const {localVideoRef,remoteVideoRef,rtcConfig,constraint,} = options

  this.peer = new RTCPeerConnection(rtcConfig)  
  this.localVideoRef = localVideoRef
  this.remoteVideoRef = remoteVideoRef
  this.constraint = constraint
  this.localStream = null
  this.buffer = []
  this.events = {}
  
  this.initializeVideoSession()
    
   
   
  
}

StoreIce(ice){
    this.buffer.push(ice)

}
eatMyStore(){
 this.buffer.length>0 &&    this.buffer.forEach(async(element)=>{
      this.handleRemoteIceCandidate(element)
       
    })

}
on(nameEvent,callback){

    if(!this.events[nameEvent]){
        this.events[nameEvent] = []
    }
    this.events[nameEvent]?.push(callback)

}
emit(nameEvent,props){
    
    if(!this.events[nameEvent]){
       return
    }
    this.events[nameEvent].forEach(fn => fn(props))

}
off(nameEvent,cb){
 if(!this.events[nameEvent]){
    return 
 }
 
 this.events[nameEvent] = this.events[nameEvent].filter(callback =>callback!=cb)
 if(this.events[nameEvent].length==0){
    delete this.events[nameEvent]
 }
}
async initializeVideoSession(){
    
    try{
   
    if(!this.localVideoRef  ){
       throwSexyError(PASS_VIDEO_REF_ERROR, PASS_VIDEO_REF_ERROR_URL)
    }
    this.localStream  = await navigator.mediaDevices.getUserMedia(this.constraint)
    this.localVideoRef.srcObject = this.localStream
    this.addlocaltracks()
    this.addremotetracks()
   
    
    this.peer.onicecandidate  = (event)=>{
        if(event.candidate) {
        this.emit("candidate",event.candidate)
        }
    }    
   
    this.peer.oniceconnectionstatechange  = ()=>{
        
        this.emit("ConnectionState",this.peer.iceConnectionState)
    }

    }
         
      

        catch(err){
        if (err.name === "NotAllowedError") {
            throwSexyError(CAMERA_ERROR_Permission, CAMERA_ERROR_Permission_URL,"red","white","no")
        }
        if (err.name === "NotFoundError") {
            throw Error("No camera device found 🎥❌")
        }
        if (err.name === "NotReadableError") {
            throw Error("Camera already in use ⚠️")
        }
        }
            

}
async initializeNewVideoSession(){
   
    try{
       
         
       this.peer = new RTCPeerConnection(this.iceconf)
       this.localStream = await navigator.mediaDevices.getUserMedia(this.constraint)
       this.localVideoRef.srcObject = this.localStream
       this.addlocaltracks()
       this.addremotetracks()
    
       this.peer.onicecandidate = (event)=>{
        if(event.candidate) this.emit("candidate",event.candidate)
       }
    }
    catch(err){
       if (err.name === "NotAllowedError") {
            throwSexyError(CAMERA_ERROR_Permission, CAMERA_ERROR_Permission_URL,"red","white","no")
        }
        if (err.name === "NotFoundError") {
            throw Error("No camera device found 🎥❌")
        }
        if (err.name === "NotReadableError") {
            throw Error("Camera already in use ⚠️")
        }
    }
}
closeConnection(){
        this.buffer = []
        const D = new Date()
        console.log("clean up the function ...",D.getHours(),":",D.getMinutes())
        this.localStream?.getTracks().forEach(track=>track.stop())
         
        if(this.localVideoRef){

            this.localVideoRef.srcObject = null 
        }
        if(this.remoteVideoRef){
            this.remoteVideoRef.srcObject  = null
        }
         if(this.peer){

         this.peer.close()
         this.peer = null
       
         
         }
         this.localStream = null
        
         
}
addlocaltracks(){
  
     this.localStream.getTracks().forEach(track => {
            this.peer.addTrack(track,this.localStream)
            
        });
}
addremotetracks(){

      this.peer.ontrack  = (event)=>{
       
       this.remoteVideoRef.srcObject  = event.streams[0]
       
   
         
      }
  
       
     
}
async createOffer() {
  
    
  
    try {

        if (!this.localStream) {
           throwSexyError(CAMERA_ERROR_MSG, CAMERA_ERROR_URL)
          return undefined
        }
         

        
        const offer = await this.peer.createOffer();
        await this.peer.setLocalDescription(offer);
        
        
        return this.peer.localDescription;  
    } catch (error) {
        console.log("Error creating offer:", error);
        
        throw error;
    }
}
async createAnswer(offer){
    
   
        try{ 
         if(!offer || offer==undefined || typeof(offer)==="string"){
            throwSexyError(ANSWER_ERROR, ANSWER_ERROR_URL)
            return
         }
        await  this.peer.setRemoteDescription(new RTCSessionDescription(offer))  
        this.emit("RemoteDescription","Succes-RemoteDescription")           
        const answer =  await  this.peer.createAnswer()
        await  this.peer.setLocalDescription(answer)
        return this.peer.localDescription
        }catch(error){
            console.log(error)        
            throw error
        }
}
async establishConnection(setRemoteAnswer)  {
 try {
     if(!setRemoteAnswer || setRemoteAnswer==undefined || setRemoteAnswer ==null){
        throwSexyError(ESTABLISH_ERORR,ESTABLISH_ERROR_URL)
        return 
     }
        
          await this.peer.setRemoteDescription(setRemoteAnswer);
           this.emit("RemoteDescription","Succes-RemoteDescription") 
          console.log("✅✅✅✅ A got remote answer, connection is ready!");

  
     
 }catch(error){
    console.log(error)
    throw error
 }

}
async handleRemoteIceCandidate(data){
    try {
       if(!data || data==undefined || data==null){
        throwSexyError(Remote_ICE_ERROR,Remote_ICE_ERROR_URL)
        return 
       }
     

       if(!this.peer.remoteDescription){
         throwSexyError(Remote_ICE_ERROR,Remote_ICE_ERROR_URL)

       }
        await this.peer.addIceCandidate(new RTCIceCandidate(data));
        console.log("✅ ICE candidate added successfully");
        
        
    } catch(err) {
        console.error("❌ Failed to add ICE candidate:", err);
    }
}

 

}

export {PeerSetup,code,uncode}






















