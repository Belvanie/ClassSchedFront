import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faHome,
    faUser, faUserPlus,
    faSignInAlt, faSignOutAlt, faServer,
    faEye, faEyeSlash,
    faIdCard, faEnvelope, faKey, faBriefcase,
    faCalendarDays,
    faSchool,
    faChalkboardTeacher,
    faBookOpenReader,
    faFilter,
    faClipboardList,
    faClipboard,
    faCalendarCheck,
    faSearch,
    faCircle,
    faThumbsUp, faThumbsDown
} from "@fortawesome/free-solid-svg-icons";

library.add(
    faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt, faServer,
    faEye, faEyeSlash, faSearch,
    faIdCard, faEnvelope, faKey, faBriefcase,
    faCalendarDays, faSchool, faChalkboardTeacher, faBookOpenReader, faFilter, faClipboardList, faClipboard,
    faCalendarCheck, faCircle, faThumbsUp, faThumbsDown
);

export { FontAwesomeIcon };