import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faUser,
    faEye, faEyeSlash,
    faKey, faBriefcase,
    faCalendarDays,
    faSchool,
    faChalkboardTeacher,
    faBookOpenReader,
    faFilter,
    faClipboardList,
    faCalendarCheck,
    faSearch,
    faCircle,
    faThumbsUp, faThumbsDown, faBook, faTrash
} from "@fortawesome/free-solid-svg-icons";

library.add(
    faUser,
    faEye, faEyeSlash, faSearch,
    faKey, faBriefcase,
    faCalendarDays, faSchool, faChalkboardTeacher, faBookOpenReader, faFilter, faClipboardList,  faBook,
    faCalendarCheck, faCircle, faThumbsUp, faThumbsDown, faTrash
);

export { FontAwesomeIcon };