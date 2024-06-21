import { memo, useEffect, useMemo } from "react";
import HeroSection from "./heroSection"
import { useDispatch, useSelector } from "react-redux";
import { getUserActivitySummary } from "@/globalStates/actions/userActivitySummaryAction";
import { resetReduxState } from "@/globalStates/actions/commanAction";
import CloudPlatformSection from "./cloudPlatform";
import RolesAndSkillsSection from "./roles&skillsSection";
import { getTechSkillsData } from "@/globalStates/actions/commanAction";
import { isEmpty } from "lodash";

const keys = ['AWS', 'Google', 'Oracle', 'Salesforce', 'Microsoft'];

function getAlternatingData(data, keys, limit) {
    const groupedData = {};
    const counters = {};
    const result = [];

    keys.forEach(key => {
        groupedData[key] = [];
        counters[key] = 0;
    });

    data.forEach(item => {
        const key = keys.find(k => item.name.includes(k));
        if (key) {
            groupedData[key].push(item);
        }
    });

    let added = true;
    while (added) {
        added = false;
        for (let key of keys) {
            if (groupedData[key].length > 0 && counters[key] < limit) {
                result.push(groupedData[key].shift());
                counters[key]++;
                added = true;
            }
        }
    }

    return result.map(item => item?.name);
}

const CloudExpertDashboard = () => {
    const dispatch = useDispatch()
    const skillList = useSelector(state => state?.CommanState?.techSkills)

    useEffect(() => {

        dispatch(getUserActivitySummary())
        dispatch(getTechSkillsData())

        return (() => {
            dispatch(resetReduxState('UserActivitySummary'))
            dispatch(resetReduxState('CommanState'))
        })

    }, [])

    const rolelist = useMemo(() => {
        if (isEmpty(skillList)) return []
        return getAlternatingData(skillList, keys, 3)
    }, [skillList])

    const skillsList = useMemo(() => {
        if (isEmpty(skillList)) return []
        return getAlternatingData(skillList.reverse(), keys.reverse(), 3)
    }, [skillList])

    return (
        <main>
            <HeroSection />
            <CloudPlatformSection />
            <RolesAndSkillsSection name='Roles' rolesAndSkillsList={rolelist} />
            <RolesAndSkillsSection name='Skills' rolesAndSkillsList={skillsList} />
        </main>
    )
}

export default memo(CloudExpertDashboard);