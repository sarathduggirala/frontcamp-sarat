import createAuthorsDivision from "./GenerateAuthorsDivision.js";
import overrideData from "./OverrideData.js";
import hideUnnecessaryChannel from "./HideUnnecessaryChannels.js";
import displayHiddenAuthors from "./DisplayHiddenAuthors.js";

export default function overRidePreviousChannels(
  requiredChannelTobeDisplayed,
  extraDivisionsRequired
) {
  if (extraDivisionsRequired == 0) {
    overrideData(requiredChannelTobeDisplayed);
    displayHiddenAuthors();
  } else if (extraDivisionsRequired > 0) {
    overrideData(requiredChannelTobeDisplayed);
    hideUnnecessaryChannel(extraDivisionsRequired);
  } else {
    let divisionsToBeCreated = Math.abs(extraDivisionsRequired);
    overrideData(
      requiredChannelTobeDisplayed.slice(
        0,
        requiredChannelTobeDisplayed.length - divisionsToBeCreated
      )
    );
    createAuthorsDivision(
      requiredChannelTobeDisplayed.slice(
        requiredChannelTobeDisplayed.length - divisionsToBeCreated,
        requiredChannelTobeDisplayed.length
      )
    );
  }
}
