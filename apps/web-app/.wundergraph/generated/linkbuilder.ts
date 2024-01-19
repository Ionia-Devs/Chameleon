// Code generated by wunderctl. DO NOT EDIT.

export interface LinkDefinition {
	targetType: string;
	targetFieldName: string;
	sourceField: string;
	argumentSources: LinkFieldArgumentSourceDefinition[];
}

export interface LinkFieldArgumentSourceDefinition {
	name: string;
	type: "objectField" | "fieldArgument";
	path: string[];
}

class LinkBuilder<T, R extends {} = {}, TT = {}> {
	// @ts-ignore
	constructor(current: R = {}, sourceField: string, targetType: string, targetField: string) {
		this.current = current;
		this.sourceField = sourceField;
		this.targetType = targetType;
		this.targetField = targetField;
	}

	private readonly sourceField: string;
	private readonly targetType: string;
	private readonly targetField: string;

	// @ts-ignore
	private current: R = {};

	argument<P extends Exclude<keyof T, keyof R>, V extends T[P], S extends "fieldArgument" | "objectField">(
		key: P,
		source: S,
		value: S extends "fieldArgument" ? string : TT,
		...extraPath: string[]
	) {
		const extra: {} = { [key]: { source, path: [value, ...extraPath] } };

		const instance = {
			...(this.current as object),
			...extra,
		} as R & Pick<T, P>;

		return new LinkBuilder<T, R & Pick<T, P>, TT>(instance, this.sourceField, this.targetType, this.targetField);
	}

	build = (): LinkDefinition => {
		const args = this.current as { [key: string]: { path: string[]; source: "fieldArgument" | "objectField" } };
		return {
			argumentSources: Object.keys(args).map((key) => ({
				name: key,
				type: args[key].source,
				path: args[key].path,
			})),
			targetType: this.targetType,
			sourceField: this.sourceField,
			targetFieldName: this.targetField,
		};
	};
}

export const sourceStep = <T extends {}, R extends {}>() => ({
	source: <F extends keyof T>(field: F) => {
		return targetStep<T, F, R>(field);
	},
});

const targetStep = <T, F extends keyof T, R>(field: F) => ({
	target: <r extends keyof R>(targetType: r, targetField: string) => {
		return new LinkBuilder<T[F], {}, R[r]>({}, field as string, targetType as string, targetField);
	},
});

interface TargetTypes {
	countries_Continent: "code" | "countries" | "name" | "_join";
	countries_Country:
		| "awsRegion"
		| "capital"
		| "code"
		| "continent"
		| "currencies"
		| "currency"
		| "emoji"
		| "emojiU"
		| "languages"
		| "name"
		| "native"
		| "phone"
		| "phones"
		| "states"
		| "subdivisions"
		| "_join";
	countries_Language: "code" | "name" | "native" | "rtl" | "_join";
	countries_State: "code" | "country" | "name" | "_join";
	countries_Subdivision: "code" | "emoji" | "name" | "_join";
	db_Schedule: "id" | "matchId" | "date" | "location" | "createdAt" | "userId" | "match" | "User" | "_join";
	db_MatchCountOutputType: "Schedule" | "_join";
	db_Match:
		| "id"
		| "cosplayerId"
		| "photographerId"
		| "createdAt"
		| "userId"
		| "cosplayer"
		| "photographer"
		| "User"
		| "Schedule"
		| "_count"
		| "_join";
	db_Review:
		| "id"
		| "reviewerId"
		| "revieweeId"
		| "rating"
		| "comment"
		| "createdAt"
		| "userId"
		| "reviewer"
		| "reviewee"
		| "User"
		| "_join";
	db_Message:
		| "id"
		| "senderId"
		| "receiverId"
		| "content"
		| "createdAt"
		| "userId"
		| "sender"
		| "receiver"
		| "User"
		| "_join";
	db_Notification: "id" | "userId" | "content" | "type" | "createdAt" | "user" | "_join";
	db_Invitation: "id" | "email" | "status" | "createdAt" | "invitedBy" | "invitedPhotographer" | "_join";
	db_Session: "id" | "sessionToken" | "userId" | "expires" | "user" | "_join";
	db_Todo: "id" | "text" | "isCompleted" | "createdAt" | "updatedAt" | "userId" | "user" | "_join";
	db_Post: "id" | "title" | "content" | "published" | "createdAt" | "updatedAt" | "authorId" | "author" | "_join";
	db_UserCountOutputType:
		| "cosplayerMatches"
		| "photographerMatches"
		| "schedules"
		| "givenReviews"
		| "receivedReviews"
		| "sentMessages"
		| "receivedMessages"
		| "notifications"
		| "invitations"
		| "Match"
		| "Review"
		| "Message"
		| "Account"
		| "Session"
		| "Todo"
		| "Post"
		| "_join";
	db_User:
		| "id"
		| "name"
		| "email"
		| "emailVerified"
		| "image"
		| "role"
		| "interests"
		| "specialization"
		| "portfolio"
		| "availability"
		| "createdAt"
		| "updatedAt"
		| "stripeCustomerId"
		| "stripeSubscriptionId"
		| "stripePriceId"
		| "stripeCurrentPeriodEnd"
		| "cosplayerMatches"
		| "photographerMatches"
		| "schedules"
		| "givenReviews"
		| "receivedReviews"
		| "sentMessages"
		| "receivedMessages"
		| "notifications"
		| "invitations"
		| "Match"
		| "Review"
		| "Message"
		| "Account"
		| "Session"
		| "Todo"
		| "Post"
		| "_count"
		| "_join";
	db_Account:
		| "id"
		| "userId"
		| "type"
		| "provider"
		| "providerAccountId"
		| "refresh_token"
		| "access_token"
		| "expires_at"
		| "token_type"
		| "scope"
		| "id_token"
		| "session_state"
		| "user"
		| "_join";
	db_AccountCountAggregateOutputType:
		| "id"
		| "userId"
		| "type"
		| "provider"
		| "providerAccountId"
		| "refresh_token"
		| "access_token"
		| "expires_at"
		| "token_type"
		| "scope"
		| "id_token"
		| "session_state"
		| "_all"
		| "_join";
	db_AccountAvgAggregateOutputType: "expires_at" | "_join";
	db_AccountSumAggregateOutputType: "expires_at" | "_join";
	db_AccountMinAggregateOutputType:
		| "id"
		| "userId"
		| "type"
		| "provider"
		| "providerAccountId"
		| "refresh_token"
		| "access_token"
		| "expires_at"
		| "token_type"
		| "scope"
		| "id_token"
		| "session_state"
		| "_join";
	db_AccountMaxAggregateOutputType:
		| "id"
		| "userId"
		| "type"
		| "provider"
		| "providerAccountId"
		| "refresh_token"
		| "access_token"
		| "expires_at"
		| "token_type"
		| "scope"
		| "id_token"
		| "session_state"
		| "_join";
	db_AggregateAccount: "_count" | "_avg" | "_sum" | "_min" | "_max" | "_join";
	db_AccountGroupByOutputType:
		| "id"
		| "userId"
		| "type"
		| "provider"
		| "providerAccountId"
		| "refresh_token"
		| "access_token"
		| "expires_at"
		| "token_type"
		| "scope"
		| "id_token"
		| "session_state"
		| "_count"
		| "_avg"
		| "_sum"
		| "_min"
		| "_max"
		| "_join";
	db_SessionCountAggregateOutputType: "id" | "sessionToken" | "userId" | "expires" | "_all" | "_join";
	db_SessionMinAggregateOutputType: "id" | "sessionToken" | "userId" | "expires" | "_join";
	db_SessionMaxAggregateOutputType: "id" | "sessionToken" | "userId" | "expires" | "_join";
	db_AggregateSession: "_count" | "_min" | "_max" | "_join";
	db_SessionGroupByOutputType: "id" | "sessionToken" | "userId" | "expires" | "_count" | "_min" | "_max" | "_join";
	db_VerificationToken: "identifier" | "token" | "expires" | "_join";
	db_VerificationTokenCountAggregateOutputType: "identifier" | "token" | "expires" | "_all" | "_join";
	db_VerificationTokenMinAggregateOutputType: "identifier" | "token" | "expires" | "_join";
	db_VerificationTokenMaxAggregateOutputType: "identifier" | "token" | "expires" | "_join";
	db_AggregateVerificationToken: "_count" | "_min" | "_max" | "_join";
	db_VerificationTokenGroupByOutputType: "identifier" | "token" | "expires" | "_count" | "_min" | "_max" | "_join";
	db_UserCountAggregateOutputType:
		| "id"
		| "name"
		| "email"
		| "emailVerified"
		| "image"
		| "role"
		| "interests"
		| "specialization"
		| "portfolio"
		| "availability"
		| "createdAt"
		| "updatedAt"
		| "stripeCustomerId"
		| "stripeSubscriptionId"
		| "stripePriceId"
		| "stripeCurrentPeriodEnd"
		| "_all"
		| "_join";
	db_UserMinAggregateOutputType:
		| "id"
		| "name"
		| "email"
		| "emailVerified"
		| "image"
		| "role"
		| "interests"
		| "specialization"
		| "createdAt"
		| "updatedAt"
		| "stripeCustomerId"
		| "stripeSubscriptionId"
		| "stripePriceId"
		| "stripeCurrentPeriodEnd"
		| "_join";
	db_UserMaxAggregateOutputType:
		| "id"
		| "name"
		| "email"
		| "emailVerified"
		| "image"
		| "role"
		| "interests"
		| "specialization"
		| "createdAt"
		| "updatedAt"
		| "stripeCustomerId"
		| "stripeSubscriptionId"
		| "stripePriceId"
		| "stripeCurrentPeriodEnd"
		| "_join";
	db_AggregateUser: "_count" | "_min" | "_max" | "_join";
	db_UserGroupByOutputType:
		| "id"
		| "name"
		| "email"
		| "emailVerified"
		| "image"
		| "role"
		| "interests"
		| "specialization"
		| "portfolio"
		| "availability"
		| "createdAt"
		| "updatedAt"
		| "stripeCustomerId"
		| "stripeSubscriptionId"
		| "stripePriceId"
		| "stripeCurrentPeriodEnd"
		| "_count"
		| "_min"
		| "_max"
		| "_join";
	db_MatchCountAggregateOutputType: "id" | "cosplayerId" | "photographerId" | "createdAt" | "userId" | "_all" | "_join";
	db_MatchMinAggregateOutputType: "id" | "cosplayerId" | "photographerId" | "createdAt" | "userId" | "_join";
	db_MatchMaxAggregateOutputType: "id" | "cosplayerId" | "photographerId" | "createdAt" | "userId" | "_join";
	db_AggregateMatch: "_count" | "_min" | "_max" | "_join";
	db_MatchGroupByOutputType:
		| "id"
		| "cosplayerId"
		| "photographerId"
		| "createdAt"
		| "userId"
		| "_count"
		| "_min"
		| "_max"
		| "_join";
	db_ScheduleCountAggregateOutputType:
		| "id"
		| "matchId"
		| "date"
		| "location"
		| "createdAt"
		| "userId"
		| "_all"
		| "_join";
	db_ScheduleMinAggregateOutputType: "id" | "matchId" | "date" | "location" | "createdAt" | "userId" | "_join";
	db_ScheduleMaxAggregateOutputType: "id" | "matchId" | "date" | "location" | "createdAt" | "userId" | "_join";
	db_AggregateSchedule: "_count" | "_min" | "_max" | "_join";
	db_ScheduleGroupByOutputType:
		| "id"
		| "matchId"
		| "date"
		| "location"
		| "createdAt"
		| "userId"
		| "_count"
		| "_min"
		| "_max"
		| "_join";
	db_ReviewCountAggregateOutputType:
		| "id"
		| "reviewerId"
		| "revieweeId"
		| "rating"
		| "comment"
		| "createdAt"
		| "userId"
		| "_all"
		| "_join";
	db_ReviewAvgAggregateOutputType: "rating" | "_join";
	db_ReviewSumAggregateOutputType: "rating" | "_join";
	db_ReviewMinAggregateOutputType:
		| "id"
		| "reviewerId"
		| "revieweeId"
		| "rating"
		| "comment"
		| "createdAt"
		| "userId"
		| "_join";
	db_ReviewMaxAggregateOutputType:
		| "id"
		| "reviewerId"
		| "revieweeId"
		| "rating"
		| "comment"
		| "createdAt"
		| "userId"
		| "_join";
	db_AggregateReview: "_count" | "_avg" | "_sum" | "_min" | "_max" | "_join";
	db_ReviewGroupByOutputType:
		| "id"
		| "reviewerId"
		| "revieweeId"
		| "rating"
		| "comment"
		| "createdAt"
		| "userId"
		| "_count"
		| "_avg"
		| "_sum"
		| "_min"
		| "_max"
		| "_join";
	db_MessageCountAggregateOutputType:
		| "id"
		| "senderId"
		| "receiverId"
		| "content"
		| "createdAt"
		| "userId"
		| "_all"
		| "_join";
	db_MessageMinAggregateOutputType: "id" | "senderId" | "receiverId" | "content" | "createdAt" | "userId" | "_join";
	db_MessageMaxAggregateOutputType: "id" | "senderId" | "receiverId" | "content" | "createdAt" | "userId" | "_join";
	db_AggregateMessage: "_count" | "_min" | "_max" | "_join";
	db_MessageGroupByOutputType:
		| "id"
		| "senderId"
		| "receiverId"
		| "content"
		| "createdAt"
		| "userId"
		| "_count"
		| "_min"
		| "_max"
		| "_join";
	db_NotificationCountAggregateOutputType: "id" | "userId" | "content" | "type" | "createdAt" | "_all" | "_join";
	db_NotificationMinAggregateOutputType: "id" | "userId" | "content" | "type" | "createdAt" | "_join";
	db_NotificationMaxAggregateOutputType: "id" | "userId" | "content" | "type" | "createdAt" | "_join";
	db_AggregateNotification: "_count" | "_min" | "_max" | "_join";
	db_NotificationGroupByOutputType:
		| "id"
		| "userId"
		| "content"
		| "type"
		| "createdAt"
		| "_count"
		| "_min"
		| "_max"
		| "_join";
	db_InvitationCountAggregateOutputType: "id" | "email" | "status" | "createdAt" | "invitedBy" | "_all" | "_join";
	db_InvitationMinAggregateOutputType: "id" | "email" | "status" | "createdAt" | "invitedBy" | "_join";
	db_InvitationMaxAggregateOutputType: "id" | "email" | "status" | "createdAt" | "invitedBy" | "_join";
	db_AggregateInvitation: "_count" | "_min" | "_max" | "_join";
	db_InvitationGroupByOutputType:
		| "id"
		| "email"
		| "status"
		| "createdAt"
		| "invitedBy"
		| "_count"
		| "_min"
		| "_max"
		| "_join";
	db_TodoCountAggregateOutputType:
		| "id"
		| "text"
		| "isCompleted"
		| "createdAt"
		| "updatedAt"
		| "userId"
		| "_all"
		| "_join";
	db_TodoMinAggregateOutputType: "id" | "text" | "isCompleted" | "createdAt" | "updatedAt" | "userId" | "_join";
	db_TodoMaxAggregateOutputType: "id" | "text" | "isCompleted" | "createdAt" | "updatedAt" | "userId" | "_join";
	db_AggregateTodo: "_count" | "_min" | "_max" | "_join";
	db_TodoGroupByOutputType:
		| "id"
		| "text"
		| "isCompleted"
		| "createdAt"
		| "updatedAt"
		| "userId"
		| "_count"
		| "_min"
		| "_max"
		| "_join";
	db_PostCountAggregateOutputType:
		| "id"
		| "title"
		| "content"
		| "published"
		| "createdAt"
		| "updatedAt"
		| "authorId"
		| "_all"
		| "_join";
	db_PostMinAggregateOutputType: "id" | "title" | "published" | "createdAt" | "updatedAt" | "authorId" | "_join";
	db_PostMaxAggregateOutputType: "id" | "title" | "published" | "createdAt" | "updatedAt" | "authorId" | "_join";
	db_AggregatePost: "_count" | "_min" | "_max" | "_join";
	db_PostGroupByOutputType:
		| "id"
		| "title"
		| "content"
		| "published"
		| "createdAt"
		| "updatedAt"
		| "authorId"
		| "_count"
		| "_min"
		| "_max"
		| "_join";
	db_AffectedRowsOutput: "count" | "_join";
	_Row:
		| "ID"
		| "Int"
		| "Float"
		| "String"
		| "Boolean"
		| "DateTime"
		| "JSON"
		| "Object"
		| "Array"
		| "OptionalID"
		| "OptionalInt"
		| "OptionalFloat"
		| "OptionalString"
		| "OptionalBoolean"
		| "OptionalDateTime"
		| "OptionalJSON"
		| "OptionalObject"
		| "OptionalArray"
		| "_join";
	weather_City: "coord" | "country" | "id" | "name" | "weather" | "_join";
	weather_Clouds: "all" | "humidity" | "visibility" | "_join";
	weather_Coordinates: "lat" | "lon" | "_join";
	weather_Summary: "description" | "icon" | "title" | "_join";
	weather_Temperature: "actual" | "feelsLike" | "max" | "min" | "_join";
	weather_Weather: "clouds" | "summary" | "temperature" | "timestamp" | "wind" | "_join";
	weather_Wind: "deg" | "speed" | "_join";
}

interface SourceFields {
	countries_continent: {
		code: null;
	};
	countries_continents: {
		filter: null;
	};
	countries_countries: {
		filter: null;
	};
	countries_country: {
		code: null;
	};
	countries_language: {
		code: null;
	};
	countries_languages: {
		filter: null;
	};
	db_findFirstAccount: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
		distinct: null;
	};
	db_findFirstAccountOrThrow: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
		distinct: null;
	};
	db_findManyAccount: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
		distinct: null;
	};
	db_aggregateAccount: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
	};
	db_groupByAccount: {
		where: null;
		orderBy: null;
		by: null;
		having: null;
		take: null;
		skip: null;
	};
	db_findUniqueAccount: {
		where: null;
	};
	db_findUniqueAccountOrThrow: {
		where: null;
	};
	db_findFirstSession: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
		distinct: null;
	};
	db_findFirstSessionOrThrow: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
		distinct: null;
	};
	db_findManySession: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
		distinct: null;
	};
	db_aggregateSession: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
	};
	db_groupBySession: {
		where: null;
		orderBy: null;
		by: null;
		having: null;
		take: null;
		skip: null;
	};
	db_findUniqueSession: {
		where: null;
	};
	db_findUniqueSessionOrThrow: {
		where: null;
	};
	db_findFirstVerificationToken: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
		distinct: null;
	};
	db_findFirstVerificationTokenOrThrow: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
		distinct: null;
	};
	db_findManyVerificationToken: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
		distinct: null;
	};
	db_aggregateVerificationToken: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
	};
	db_groupByVerificationToken: {
		where: null;
		orderBy: null;
		by: null;
		having: null;
		take: null;
		skip: null;
	};
	db_findUniqueVerificationToken: {
		where: null;
	};
	db_findUniqueVerificationTokenOrThrow: {
		where: null;
	};
	db_findFirstUser: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
		distinct: null;
	};
	db_findFirstUserOrThrow: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
		distinct: null;
	};
	db_findManyUser: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
		distinct: null;
	};
	db_aggregateUser: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
	};
	db_groupByUser: {
		where: null;
		orderBy: null;
		by: null;
		having: null;
		take: null;
		skip: null;
	};
	db_findUniqueUser: {
		where: null;
	};
	db_findUniqueUserOrThrow: {
		where: null;
	};
	db_findFirstMatch: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
		distinct: null;
	};
	db_findFirstMatchOrThrow: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
		distinct: null;
	};
	db_findManyMatch: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
		distinct: null;
	};
	db_aggregateMatch: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
	};
	db_groupByMatch: {
		where: null;
		orderBy: null;
		by: null;
		having: null;
		take: null;
		skip: null;
	};
	db_findUniqueMatch: {
		where: null;
	};
	db_findUniqueMatchOrThrow: {
		where: null;
	};
	db_findFirstSchedule: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
		distinct: null;
	};
	db_findFirstScheduleOrThrow: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
		distinct: null;
	};
	db_findManySchedule: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
		distinct: null;
	};
	db_aggregateSchedule: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
	};
	db_groupBySchedule: {
		where: null;
		orderBy: null;
		by: null;
		having: null;
		take: null;
		skip: null;
	};
	db_findUniqueSchedule: {
		where: null;
	};
	db_findUniqueScheduleOrThrow: {
		where: null;
	};
	db_findFirstReview: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
		distinct: null;
	};
	db_findFirstReviewOrThrow: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
		distinct: null;
	};
	db_findManyReview: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
		distinct: null;
	};
	db_aggregateReview: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
	};
	db_groupByReview: {
		where: null;
		orderBy: null;
		by: null;
		having: null;
		take: null;
		skip: null;
	};
	db_findUniqueReview: {
		where: null;
	};
	db_findUniqueReviewOrThrow: {
		where: null;
	};
	db_findFirstMessage: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
		distinct: null;
	};
	db_findFirstMessageOrThrow: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
		distinct: null;
	};
	db_findManyMessage: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
		distinct: null;
	};
	db_aggregateMessage: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
	};
	db_groupByMessage: {
		where: null;
		orderBy: null;
		by: null;
		having: null;
		take: null;
		skip: null;
	};
	db_findUniqueMessage: {
		where: null;
	};
	db_findUniqueMessageOrThrow: {
		where: null;
	};
	db_findFirstNotification: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
		distinct: null;
	};
	db_findFirstNotificationOrThrow: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
		distinct: null;
	};
	db_findManyNotification: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
		distinct: null;
	};
	db_aggregateNotification: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
	};
	db_groupByNotification: {
		where: null;
		orderBy: null;
		by: null;
		having: null;
		take: null;
		skip: null;
	};
	db_findUniqueNotification: {
		where: null;
	};
	db_findUniqueNotificationOrThrow: {
		where: null;
	};
	db_findFirstInvitation: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
		distinct: null;
	};
	db_findFirstInvitationOrThrow: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
		distinct: null;
	};
	db_findManyInvitation: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
		distinct: null;
	};
	db_aggregateInvitation: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
	};
	db_groupByInvitation: {
		where: null;
		orderBy: null;
		by: null;
		having: null;
		take: null;
		skip: null;
	};
	db_findUniqueInvitation: {
		where: null;
	};
	db_findUniqueInvitationOrThrow: {
		where: null;
	};
	db_findFirstTodo: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
		distinct: null;
	};
	db_findFirstTodoOrThrow: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
		distinct: null;
	};
	db_findManyTodo: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
		distinct: null;
	};
	db_aggregateTodo: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
	};
	db_groupByTodo: {
		where: null;
		orderBy: null;
		by: null;
		having: null;
		take: null;
		skip: null;
	};
	db_findUniqueTodo: {
		where: null;
	};
	db_findUniqueTodoOrThrow: {
		where: null;
	};
	db_findFirstPost: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
		distinct: null;
	};
	db_findFirstPostOrThrow: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
		distinct: null;
	};
	db_findManyPost: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
		distinct: null;
	};
	db_aggregatePost: {
		where: null;
		orderBy: null;
		cursor: null;
		take: null;
		skip: null;
	};
	db_groupByPost: {
		where: null;
		orderBy: null;
		by: null;
		having: null;
		take: null;
		skip: null;
	};
	db_findUniquePost: {
		where: null;
	};
	db_findUniquePostOrThrow: {
		where: null;
	};
	db_queryRaw: {
		query: null;
		parameters: null;
	};
	db_queryRawJSON: {
		query: null;
		parameters: null;
	};
	weather_getCityById: {
		config: null;
		id: null;
	};
	weather_getCityByName: {
		config: null;
		country: null;
		name: null;
	};
}

const linkBuilder = sourceStep<SourceFields, TargetTypes>();
export default linkBuilder;