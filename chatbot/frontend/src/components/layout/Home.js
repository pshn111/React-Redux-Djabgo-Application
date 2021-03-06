import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getUsers, deleteUser } from '../../actions/user'



export class Home extends Component {
  static propTypes = {
    users:PropTypes.array.isRequired,
    getUsers: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <Fragment>
        <h2>Users</h2>
        <table className="table table striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Create Date</th>
              <th />
            </tr>
          </thead>
          <tbody>
            { this.props.users.map(user =>(
              <tr key = {user.id}>
                <td>{user.id}</td>
                <td>{user.user_name}</td>
                <td>{user.email}</td>
                <td>{user.create_at}</td>
                <td><button onClick={this.props.deleteUser.bind(this, user.id)} className="btn btn-danger btn-sm">Delete</button></td>
              </tr>
            )) }
          </tbody>
        </table>
      </Fragment>
    )
  }
}
const mapStateToProps = state => ({
  users: state.bot.users
})

export default connect(mapStateToProps, { getUsers, deleteUser })(Home);

// export default function Home() {
//   return (
//     <div class="container">
//         <h2 class="my-5 pt-5 text-center">Consent Form</h2>
//         <div class="mx-5 px-5 py-5 bg-light text-dark">
//             Welcome, I am CAMI, the chatbot assistant for medical information. <br/>In order to proceed, we would like you to look at our consent form. The assent form can be accessed <a href="/static/public/assent.pdf" target="_blank">here</a>.<br/><br/>
//             <b>ONLINE CONSENT AND INFORMATION LETTER-PERSONAL ASSISTANT</b><br/><br/>
//             <b>Study Title</b>: Canadian Network for Personalized Interventions in Intellectual Disability<br/><br/>
//             <b>Principal Investigator</b>: <i>Dr. Francois Bolduc, MD, PhD FRCPC             Ph: 780-492-9616</i><br/>
//             <b>Coordinator</b>:<i>        Ph: 780-492-9461</i><br/>
//             Department of Pediatrics<br/>
//             University of Alberta<br/><br/>
//             You are asked to help develop a novel tool for providing information about neurodevelopmental
//             disability (NDD) to help improve access to personalized information and coaching for NDD.
//             Before you agree to participate in this project, please take the time to read the following consent form
//             and make sure you understand its contents.<br/><br/>
//             <b>Purpose and Background</b><br/><br/>
//             The main purpose of the study is to find new ways to improve access to services and information for
//             individuals with intellectual disability and their families. This research study is sponsored by the Kids
//             Brain Health Network (KBHN).<br/><br/>
//             <b>What will I be asked to do?</b><br/><br/>
//             You will be asked to provide your email and create a password if you want. You will also be able to
//             use the chatbot without providing those information if you prefer. Your interaction with the personal
//             assistant will depend on the questions you ask and if the topic is covered in our database. You may
//             therefore spend as little as 5 minutes or up to 1 hour. You will be able to use the personal assistant as
//             much as you want during the duration of the study. You will be asked for information about you and
//             the individual you are looking for information about intervention for. This will the personal assistant
//             to provide the most specific information possible. You will be asked to rate the suggestions provided
//             by the chatbot on a scale of 1-5 stars from not useful to very useful.<br/><br/>
//             <b>Possible Benefits and Risk.</b><br/><br/>
//             You may not get any benefit from your participation in this study. In the long term, this study may
//             help families with NDD, healthcare providers or educators in the future, by providing a better
//             understanding of the factors implicated in NDD, and better interventions may be discovered.
//             It is not possible to know all of the risks that may happen in a study, but the researchers have taken all
//             reasonable safeguards to minimize any known risks to a study participant. You can decide to
//             withdraw from the study and request your information to be deleted at any time by emailing the study
//             team.<br/><br/>
//             <b>Confidentiality</b><br/><br/>
//             During the study we will be collecting information about you and the individual you are obtaining
//             information about intervention for (first name for personalization and in case you are asking about
//             more than 1 individual), your location, the age, sex, challenging behaviors and potential triggers
//             experienced by the individual you are searching for. We will not request any medical identification
//             number.<br/><br/>
//             The information gathered by the personal assistant will be stored in an encrypted database. We will
//             do everything we can to make sure that this data is kept private. We cannot guarantee absolute
//             privacy. However, we will make every effort to make sure that the information is kept private. The
//             information will be available to our study team only and will not be visible to other participants.
//             You will have the possibility to communicate any question by contacting the study coordinator either
//             by phone or email (without including confidential information). In some cases, we may obtain or
//             already have your name for other aspect of our study. This will be stored on our password protected
//             computers.<br/><br/>
//             During research studies it is important that the data we get are accurate. For this reason the
//             information collected about the user and the individual for whom they are using the chatbot, may be
//             looked at by the University of Alberta auditors or the University of Alberta Health Research Ethics
//             Board. The sponsor (Kids Brain Health Network) will not have access to personal information that
//             could identify you or your child directly.<br/><br/>
//             After the study is done, we will still need to securely store the data collected as part of the study. At
//             the University of Alberta, we keep data stored for a minimum of 5 years after the end of the study.<br/><br/>
//             <b>Reimbursement</b>: You will not be paid to participate to this component of the study. The rights to the
//             commercial products will belong to the sponsor, collaborators or future unknown researchers.<br/><br/>
//             <b>Participating</b>: Participation is voluntary and should you choose to participate, you can withdraw at
//             any time. If you leave the study, we will not collect new information and you can request us to
//             remove the information already collected.<br/><br/>
//             <b>Questions</b>: If you have any questions or would like to participate in this study please contact the
//             study coordinator by contacting 780-492-9461.<br/><br/>
//             If you have any questions regarding your rights as a research participant, you may contact the Health
//             Research Ethics Board at 780-492-2615. This office is independent of the study investigators.<br/><br/>
//             <b>DISCLAIMER : The medical information on this site is provided as an information resource only, and is not to be used or relied on for any diagnostic or treatment purposes. This information does not create any patient-physician relationship, and should not be used as a substitute for professional diagnosis and treatment. By visiting this site you agree to the these terms and conditions.</b><br/><br/>
//             Do you understand that you have been asked to be in a research study?<br/><br/><br/>
//             <button type="button" class="btn btn-outline-success btn-lg btn-block ">Understand</button>
//         </div>
        
//     </div>
//   )
// }
