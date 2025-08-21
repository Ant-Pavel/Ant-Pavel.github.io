/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./MT/CacheCustom.js":
/*!***************************!*\
  !*** ./MT/CacheCustom.js ***!
  \***************************/
/***/ ((module) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Cache = /*#__PURE__*/function () {
  function Cache() {
    _classCallCheck(this, Cache);
  }
  return _createClass(Cache, null, [{
    key: "insert",
    value:
    /**
     * Записывает в кэш знаение
     * @param {string} cacheName
     * @param {string} key
     * @param {any} value
     */
    function insert(cacheName, key, value) {
      api.cache.setCacheKey(cacheName);
      api.cache.insert(key, value);
    }

    /**
     * Получает значение из кэша по ключу
     * @param {string} cacheName
     * @param {string} key
     * @returns {string | null} значение по заданному ключу, null - значение отсутствует
     */
  }, {
    key: "getValue",
    value: function getValue(cacheName, key) {
      var result = null;
      api.cache.setCacheKey(cacheName);
      if (api.cache.contains(key)) {
        result = api.cache.value(key);
      } else {
        api.log.warn("\u041A\u043B\u044E\u0447 ".concat(key, " \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D \u0432 \u043A\u044D\u0448\u0435 ").concat(cacheName));
      }
      return result;
    }

    /**
     * Удаляет из кэша ключ и его значение
     * @param {string} cacheName
     * @param {string} key
     */
  }, {
    key: "remove",
    value: function remove(cacheName, key) {
      api.cache.setCacheKey(cacheName);
      api.cache.remove(key);
    }
  }]);
}();
module.exports = Cache;

/***/ }),

/***/ "./MT/SurveyCRUD.js":
/*!**************************!*\
  !*** ./MT/SurveyCRUD.js ***!
  \**************************/
/***/ ((module) => {

// SurveyCrud
var mtVersionFull = api.warp.app.version().string;
var mtVersion = +"".concat(mtVersionFull[0] + mtVersionFull[2]) || 0;
var ModuleMT = function ModuleMT() {
  this.createQuestionnaireObject = createQuestionnaireObject;
  this.updateVerstamp = updateVerstamp;
  this.stornDocument = stornDocument;
  this.setZeroVerstamps = setZeroVerstamps;
  this.saveDocument = saveDocument;
  this.discoverTemplates = discoverTemplates;
  this.discoverDocs = discoverDocs;
  this.getDocument = getDocument;
  this.deleteDocument = deleteDocument;
  this.getQuestionnaireMeta = getQuestionnaireMeta;
  this.getTemplateFirstVersionId = getTemplateFirstVersionId;
};
module.exports = {
  createQuestionnaireObject: createQuestionnaireObject,
  saveDocument: saveDocument,
  discoverTemplates: discoverTemplates,
  discoverDocs: discoverDocs,
  getDocument: getDocument,
  getQuestionnaireMeta: getQuestionnaireMeta,
  getTemplateFirstVersionId: getTemplateFirstVersionId,
  deleteDocument: deleteDocument
};
if (global) {
  var ModuleMTInst = new ModuleMT();
  global.surveyCreateQuestionnaireObject = function surveyCreateQuestionnaireObject(msg) {
    var doc = ModuleMTInst.createQuestionnaireObject(JSON.parse(msg));
    return JSON.stringify(doc);
  };
  global.surveySaveDocument = function surveySaveDocument(msg) {
    var _JSON$parse = JSON.parse(msg),
      object = _JSON$parse.object,
      isDraft = _JSON$parse.isDraft,
      isForced = _JSON$parse.isForced,
      notUpload = _JSON$parse.notUpload,
      stornDoc = _JSON$parse.stornDoc;
    var doc = ModuleMTInst.saveDocument({
      object: object,
      isDraft: isDraft,
      isForced: isForced,
      notUpload: notUpload,
      stornDoc: stornDoc
    });
    return JSON.stringify(doc);
  };
  global.surveyGetDocument = function surveyGetDocument(msg) {
    var doc = ModuleMTInst.getDocument(JSON.parse(msg));
    return JSON.stringify(doc);
  };
  global.surveyDiscoverDocs = function surveyDiscoverDocs(msg) {
    var _JSON$parse2 = JSON.parse(msg),
      idTemplate = _JSON$parse2.idTemplate,
      idOutlet = _JSON$parse2.idOutlet,
      idVisit = _JSON$parse2.idVisit,
      statuses = _JSON$parse2.statuses,
      todayOnly = _JSON$parse2.todayOnly;
    var res = ModuleMTInst.discoverDocs({
      idTemplate: idTemplate,
      idOutlet: idOutlet,
      idVisit: idVisit,
      statuses: statuses,
      todayOnly: todayOnly
    });
    return JSON.stringify(res);
  };
  global.surveyDiscoverTemplates = function surveyDiscoverTemplates(msg) {
    //  { templateNames, templateComment, idOutlet, idPosition, idDistributor, NoSetsCheck }
    // аргумент - объект
    var res = ModuleMTInst.discoverTemplates(JSON.parse(msg));
    return JSON.stringify(res);
  };
  global.surveyGetQuestionnaireMeta = function surveyGetQuestionnaireMeta(msg) {
    var res = ModuleMTInst.getQuestionnaireMeta(JSON.parse(msg));
    return JSON.stringify(res);
  };
  global.surveyStornDocument = function surveyStornDocument(msg) {
    var _JSON$parse3 = JSON.parse(msg),
      idDoc = _JSON$parse3.idDoc,
      deleting = _JSON$parse3.deleting;
    var res = ModuleMTInst.stornDocument(idDoc, deleting);
    return JSON.stringify(res);
  };
  global.surveyDeleteDocument = function surveyDeleteDocument(msg) {
    var _JSON$parse4 = JSON.parse(msg),
      idDoc = _JSON$parse4.idDoc;
    var res = ModuleMTInst.deleteDocument({
      idDoc: idDoc
    });
    return JSON.stringify(res);
  };
  global.surveySetZeroVerstamps = function surveySetZeroVerstamps(msg) {
    var _JSON$parse5 = JSON.parse(msg),
      idDoc = _JSON$parse5.idDoc;
    var res = ModuleMTInst.setZeroVerstamps(idDoc);
    return JSON.stringify(res);
  };
  global.surveyGetTemplateFirstVersionId = function surveyGetTemplateFirstVersionId(msg) {
    var res = ModuleMTInst.getTemplateFirstVersionId(JSON.parse(msg));
    return JSON.stringify(res);
  };
}
var emptyAnswer = {
  drSurveyValueId: '0',
  AnswerDate: '1900-01-01 00:00:00',
  AnswerId: '0',
  AnswerNumber: '0',
  AnswerStr: ''
};

/**
 * Объект записи ответа ОЛ
 * @typedef Answer
 * @property {string} drSurveyValueId
 * @property {string} AnswerDate
 * @property {string} AnswerId
 * @property {string} AnswerNumber
 * @property {string} AnswerStr
 */

/**
 * Объект записи дефолтного ответа ОЛ
 * @typedef AnswerDefault
 * @property {string} AnswerDate
 * @property {string} AnswerId
 * @property {string} AnswerNumber
 * @property {string} AnswerStr
 */

/**
 * Объект записи ответа ОЛ
 * @typedef AnswerOption
 * @property {string} QuestionAnswerId
 * @property {string} AnswerId
 * @property {string} Name
 */

/**
 * Объект записи данных о фото
 * @typedef AnswerPhoto
 * @property {string} drSurveyPhotoId
 * @property {string} photoTime
 * @property {string} photoFileName
 * @property {string} [key]
 */

/**
 * Данные о вопросе ОЛ
 * @typedef Row
 * @property {string} drSurveyId
 * @property {string} idPacket
 * @property {string} idTemplateRow
 * @property {string} idTemplateRow
 * @property {string} idQuestion
 * @property {'1'|'0'} IsRequired
 * @property {'1'|'0'} IsReadOnly
 * @property {string} questionName
 * @property { 'Questions_AnswerType_Text' | 'Questions_AnswerType_Integer' |
 *  'Questions_AnswerType_Real' | 'Questions_AnswerType_DateOnly' |
 *  'Questions_AnswerType_TimeOnly' | 'Questions_AnswerType_DateTime' |
 *  'Questions_AnswerType_Single' | 'Questions_AnswerType_Multiple' |
 *  'Questions_AnswerType_YesNoUnknown' | 'Questions_AnswerType_BarCode' |
 *  'Questions_AnswerType_YesNo' | 'Questions_AnswerType_Photo'} questionType
 * @property {string} minVal
 * @property {string} maxVal
 * @property {Answer[]} answers
 * @property {AnswerPhoto[]} photos
 * @property {AnswerOption[]} optionsList
 * @property {AnswerDefault[]} defValues
 * @property {string} [key]
 */

/**
 * Тема ОЛ
 * @typedef Topic
 * @property {string} idTopic
 * @property {string} topicName
 * @property {Row[]} rows
 * @property {string} [key]
 */

/**
 * Объект документа ОЛ
 * @typedef OKR_CRUD_Questionnaire
 * @property {string} docId
 * @property {string} idFirstVersion
 * @property {string} idPreviousVersion
 * @property {string} idStatus
 * @property {'1'|'0'} deleted
 * @property {string} idVisit
 * @property {string} idOutlet
 * @property {string} idPhysicalPerson
 * @property {string} idRoute
 * @property {string} idPosition
 * @property {string} docComment
 * @property {string} idTemplate
 * @property {string} idTemplateFV
 * @property {string} templateComment
 * @property {string} idViewMode
 * @property {string} templateName
 * @property {string} OpDate
 * @property {Topic[]} topics
 * @property {string} [key]
 */

/**
 * Создаение пустого(незаполненного) документа ол
 * @param {object} options
 * @param {string} options.idTemplate - id шаблона ОЛ
 * @param {boolean} [options.checkHistory] - проверка историчности для ол
 * @return {OKR_CRUD_Questionnaire} объект
 */
function createQuestionnaireObject(_ref) {
  var idTemplate = _ref.idTemplate,
    _ref$checkHistory = _ref.checkHistory,
    checkHistory = _ref$checkHistory === void 0 ? true : _ref$checkHistory;
  var questionsKeysWithHistory = {};
  var resp = [];
  var sqlQueryTemplate = "SELECT\n      templ.id AS idTemplate, \n      templ.idFirstVersion AS idTemplateFV,\n      templ.Name AS templateName,\n      templ.Comment AS templateComment,\n      templ.idViewMode AS idViewMode,\n      qt.id AS idTopic,\n      qt.Name AS topicName,\n      qtr.id AS idTemplateRow,\n      qtr.IsReadOnly AS IsReadOnly,\n      qtr.IsRequired AS IsRequired,\n      rg.id AS idQuestion,\n      rg.FullName AS questionName,\n      qtr.minVal AS minVal,\n      qtr.maxVal AS maxVal,\n      qtr.idLastAnswerKind AS idLastAnswerKind,\n      eb.CodeKey AS questionType\n      FROM refQstTemplates AS templ\n      JOIN refQstTemplatesTopics AS qtt ON qtt.idTemplate = templ.id\n      JOIN refQstTopics AS qt ON qt.id = qtt.idTopic\n      JOIN refQstTemplatesRows AS qtr ON qtr.idTemplateTopic = qtt.id\n      JOIN refGoods AS rg ON rg.id = qtr.idQuestion\n      JOIN Enums AS eb ON eb.id = qtr.idAnswerType\n      -- JOIN (\n      --    SELECT idItem AS idItem, max(EventDate) AS EventDate FROM refPropertiesHistory AS ph \n      --    WHERE date(ph.EventDate) <= date('now', 'localtime')\n      --    GROUP BY idItem\n      -- ) AS phDate ON phDate.idItem = templ.id\n      -- JOIN refPropertiesHistory AS ph ON ph.EventDate = phDate.EventDate AND ph.idItem = phDate.idItem\n      -- WHERE templ.deleted = 0\n      -- AND ph.idEvent = 133 AND ph.deleted = 0\n      WHERE templ.id = ".concat(idTemplate, "\n      ORDER BY qtt.Priority ASC, qtr.Priority ASC");
  api.sql.exec(sqlQueryTemplate);
  var objQst = api.sql.rows();
  objQst.forEach(function (item) {
    if (!resp.find(function (template) {
      return item.idTemplate === template.idTemplate;
    })) {
      var template = {};
      template.docId = '0';
      template.idFirstVersion = '0';
      template.idPreviousVersion = '0';
      template.idStatus = '8';
      template.deleted = '0';
      template.idVisit = '0';
      template.idOutlet = '0';
      template.idPhysicalPerson = '0';
      template.idRoute = '0';
      template.idPosition = '0';
      template.docComment = '';
      template.idTemplate = item.idTemplate;
      template.idTemplateFV = item.idTemplateFV;
      template.templateComment = item.templateComment;
      template.idViewMode = item.idViewMode;
      template.templateName = item.templateName;
      template.topics = [];
      resp.push(template);
    }
    if (!resp.find(function (template) {
      return item.idTemplate === template.idTemplate;
    }).topics.some(function (topic) {
      return item.idTopic === topic.idTopic;
    })) {
      var topic = {};
      topic.idTopic = item.idTopic;
      topic.topicName = item.topicName;
      topic.rows = [];
      resp.find(function (template) {
        return item.idTemplate === template.idTemplate;
      }).topics.push(topic);
    }
    if (!resp.find(function (template) {
      return item.idTemplate === template.idTemplate;
    }).topics.find(function (topic) {
      return item.idTopic === topic.idTopic;
    }).rows.some(function (templateRow) {
      return item.idTemplateRow === templateRow.idTemplateRow;
    })) {
      var templateRow = {};
      if (item.idLastAnswerKind === '751') {
        questionsKeysWithHistory[item.idTopic + item.idQuestion] = 1;
      }
      templateRow.drSurveyId = '0';
      templateRow.idPacket = '0';
      templateRow.idTemplateRow = item.idTemplateRow;
      templateRow.idQuestion = item.idQuestion;
      templateRow.IsReadOnly = item.IsReadOnly;
      templateRow.IsRequired = item.IsRequired;
      templateRow.questionName = item.questionName;
      templateRow.questionType = item.questionType;
      templateRow.minVal = item.minVal;
      templateRow.maxVal = item.maxVal;
      templateRow.answers = [];
      templateRow.photos = [];
      templateRow.optionsList = [];
      templateRow.defValues = [];
      templateRow.answers.push(JSON.parse(JSON.stringify(emptyAnswer)));

      // Получаем Варианты ответов
      var sqlQueryAnswers = "SELECT\n              qa.id AS QuestionAnswerId,\n              qsa.id AS AnswerId,\n              qsa.Value AS Name,\n              qsa.GroupName AS GroupName\n              FROM refQstTemplatesRows AS qtr\n              JOIN refQuestionsAnswers AS qa ON qa.idTemplateRow = qtr.id\n              JOIN refQstAnswers AS qsa ON qsa.id = qa.idValue\n              WHERE qsa.deleted = 0 AND qa.deleted = 0\n              AND qtr.id = ".concat(item.idTemplateRow, "\n              ORDER BY qsa.Priority\n              ");
      api.sql.exec(sqlQueryAnswers);
      var optionsList = api.sql.rows();
      if (optionsList.length) {
        optionsList.forEach(function (option) {
          templateRow.optionsList.push(option);
        });
      }

      // Получаем значения по умолчанию
      var sqlQueryDefValues = "SELECT\n              id AS id,\n              AnswerStr AS AnswerStr,\n              AnswerNumber AS AnswerNumber,\n              AnswerDate AS AnswerDate,\n              AnswerID AS AnswerId\n              FROM refQstTemplatesRowsDefValues\n              WHERE idTemplateRow = ".concat(item.idTemplateRow);
      api.sql.exec(sqlQueryDefValues);
      var defValues = api.sql.rows();
      if (defValues.length) {
        defValues.forEach(function (defVal) {
          templateRow.defValues.push(defVal);
        });
      }
      resp.find(function (template) {
        return item.idTemplate === template.idTemplate;
      }).topics.find(function (topic) {
        return item.idTopic === topic.idTopic;
      }).rows.push(templateRow);
    }
  });
  if (!checkHistory || Object.keys(questionsKeysWithHistory).length === 0) return resp[0];
  var documents = discoverDocs({
    idTemplate: idTemplate,
    statuses: ['1'],
    todayOnly: false
  });
  if (!documents || !documents.length) return resp[0];
  var previousDoc = getDocument({
    surveyDocId: documents[0].docId
  });
  var QWithMergedAnswers = mergeQuestionnaireAnswers({
    QTo: resp[0],
    QFrom: previousDoc,
    questionsKeys: questionsKeysWithHistory
  });
  return QWithMergedAnswers;
}
function updateVerstamp(idDoc) {
  var verstamp = api.exchange.verstamp();
  var UpdateDocQueries = ["UPDATE DocJournal SET verstamp = ".concat(verstamp, " WHERE id = ").concat(idDoc), "UPDATE dhSurvey SET verstamp = ".concat(verstamp, " WHERE id = ").concat(idDoc), "UPDATE drSurvey SET verstamp = ".concat(verstamp, " WHERE idDoc = ").concat(idDoc), "UPDATE drSurveyValues SET verstamp = ".concat(verstamp, " WHERE idDocRow IN\n        (SELECT id FROM drSurvey WHERE idDoc = ").concat(idDoc, ")"), "UPDATE drSurveyPhotos SET verstamp = ".concat(verstamp, " WHERE idDocRow IN\n        (SELECT id FROM drSurvey WHERE idDoc = ").concat(idDoc, ")")];
  UpdateDocQueries.forEach(function (sqlQuery) {
    api.sql.exec(sqlQuery);
  });
}
function stornDocument(idDoc, deleting) {
  var verstamp = api.exchange.verstamp();
  var UpdateDocQueries = ["UPDATE DocJournal SET idStatus = 3, ".concat(deleting ? 'deleted = 1, ' : '', "\n         verstamp = ").concat(verstamp, " WHERE id = ").concat(idDoc), "UPDATE dhSurvey SET verstamp = ".concat(verstamp, " WHERE id = ").concat(idDoc), "UPDATE drSurvey SET verstamp = ".concat(verstamp, " WHERE idDoc = ").concat(idDoc), "UPDATE drSurveyValues SET verstamp = ".concat(verstamp, " WHERE idDocRow IN\n        (SELECT id FROM drSurvey WHERE idDoc = ").concat(idDoc, ")")];
  if (mtVersion < 45) {
    UpdateDocQueries.push("UPDATE drSurveyPhotos SET verstamp = ".concat(verstamp, " WHERE idDocRow IN \n            (SELECT id FROM drSurvey WHERE idDoc = ").concat(idDoc, ")"));
  }
  UpdateDocQueries.forEach(function (sqlQuery) {
    api.sql.exec(sqlQuery);
  });
}
function setZeroVerstamps(idDoc) {
  var sqlQueries = ["UPDATE DocJournal SET verstamp = 0 WHERE id = ".concat(idDoc), "UPDATE dhSurvey SET verstamp = 0 WHERE id = ".concat(idDoc), "UPDATE drSurvey SET verstamp = 0 WHERE idDoc = ".concat(idDoc), "UPDATE drSurveyValues SET verstamp = 0 WHERE idDocRow IN\n        (SELECT id FROM drSurvey WHERE idDoc = ".concat(idDoc, ")")];
  if (mtVersion < 45) {
    sqlQueries.push("UPDATE drSurveyPhotos SET verstamp = 0 WHERE idDocRow IN\n            (SELECT id FROM drSurvey WHERE idDoc = ".concat(idDoc, ")"));
  }
  sqlQueries.forEach(function (sqlQuery) {
    api.sql.exec(sqlQuery);
  });
}

/**
 * Функция сохранения документа ол
 * @param {object} options
 * @param {OKR_CRUD_Questionnaire} options.object - документ ол
 * @param {boolean} options.isDraft - признак сохранения в статусе черновика
 * @param {boolean} [options.isForced] - флаг создания новых айдишников
 * @param {boolean} [options.notUpload] - флаг невыгрузки документа после сохранения
 * @param {boolean} [options.stornDoc] - признак сторнирования документа
 */
function saveDocument(_ref2) {
  var object = _ref2.object,
    isDraft = _ref2.isDraft,
    isForced = _ref2.isForced,
    _ref2$notUpload = _ref2.notUpload,
    notUpload = _ref2$notUpload === void 0 ? false : _ref2$notUpload,
    _ref2$stornDoc = _ref2.stornDoc,
    stornDoc = _ref2$stornDoc === void 0 ? true : _ref2$stornDoc;
  api.log.info("saveDocument in back start ".concat(object.docId, " ").concat(isDraft));
  var regenerateIds = object.idStatus !== '8' && !isForced;

  // Если (PV == 0) и (FV == 0) => obj.FV = docId, obj.PV = 0
  // Если stornDoc и FV и (PV == 0) => obj.FV = docId, obj.PV = doc.Id
  // Если stornDoc и FV и PV => obj.FV = FV, obj.PV = docId;
  // Если !stornDoc и FV и PV => obj.FV = docId, obj.PV = 0;

  if (object.docId !== '0' && object.idStatus === '1' && object.idFirstVersion !== '0' && stornDoc) {
    if (object.idPreviousVersion === '0') {
      object.idFirstVersion = object.docId;
      object.idPreviousVersion = object.docId;
    } else {
      object.idPreviousVersion = object.docId;
    }
  }
  object.idStatus = '8';
  var distributorId;
  if (object.docId !== '0' && regenerateIds) {
    distributorId = api.document.info(object.docId).distributorId;
    api.log.info("check distr on storn doc ".concat(distributorId));
  } else if (api.context.distributorId && api.context.distributorId != 0) {
    api.log.info("check distr ".concat(api.context.distributorId));
    distributorId = api.context.distributorId;
  } else {
    distributorId = getDistributorCoId();
  }
  if (object.docId === '0' || regenerateIds) {
    object.docId = api.getId.newId(distributorId);
  }
  if (object.idFirstVersion === '0' && object.idPreviousVersion === '0' && object.idStatus === '8') {
    object.idFirstVersion = object.docId;
  }
  if (!stornDoc) {
    object.idFirstVersion = object.docId;
    object.idPreviousVersion = '0';
  }
  var insSQLdj = "\n      INSERT OR REPLACE INTO [DocJournal]([id],[PrintDocNum],[OpDate],[DateTimeStamp],[idStatus],\n      [idCreator],[idClient],[".concat(mtVersion >= 45 ? 'idOutlet' : 'idBuyPoint', "],[Amount],[idOperation],[idBaseDoc],[idFirstVersion],[idPreviousVersion],\n      [PDADocNum],[idRoute],[deleted],[PrnDocNum],[CrDate],[idPhysicalPerson],[idVisit],[idAction],\n      [idPosition],[Comment],[isEditOut],[ObjectType],[idExchangeState],[idBusinessStatus],[idState],verstamp)\n      VALUES\n      (\n        ").concat(object.docId, ", --id\n        '', --PrintDocNum\n        DATETIME('now', 'localtime'), --OpDate\n        DATETIME('now', 'localtime'), --DateTimeStamp \n        ").concat(object.idStatus, ", --idStatus\n        ").concat(object.idPhysicalPerson, ",  --idCreator\n        0, --idClient \n        ").concat(object.idOutlet, ", --").concat(mtVersion >= 45 ? 'idOutlet' : 'idBuyPoint', "\n        0, --Amount\n        33, --idOperation\n        0, --idBaseDoc\n        ").concat(object.idFirstVersion, ", --idFirstVersion\n        ").concat(object.idPreviousVersion, ", --idPreviousVersion\n        0, --PDADocNum\n        ").concat(object.idRoute, ", --idRoute\n        ").concat(object.deleted, ", --deleted\n        '', --PrnDocNum\n        DATETIME('now', 'localtime'), --CrDate\n        ").concat(object.idPhysicalPerson, ", --idPhysicalPerson\n        ").concat(object.idVisit, ", --idVisit\n        0, --idAction\n        ").concat(object.idPosition, ", --idPosition\n        '").concat(object.docComment, "', --Comment\n        0, --isEditOut\n        null, --ObjectType\n        0, --idExchangeState\n        0, --idBusinessStatus\n        1, --[idState]\n        0 --verstamp \n      )");
  api.sql.exec(insSQLdj);
  var insSQLsh = "\n    INSERT OR REPLACE INTO [dhSurvey] ([id],[idTemplate],[idRoute], [verstamp])\n      VALUES\n      (\n        ".concat(object.docId, ", --id\n        ").concat(object.idTemplate, ", --idTemplate\n        ").concat(object.idRoute, ", --idRoute\n        0 --verstamp\n      )");
  api.sql.exec(insSQLsh);
  var sqlGetDrSurveyDB = "SELECT id AS id FROM drSurvey WHERE idDoc = ".concat(object.docId);
  api.sql.exec(sqlGetDrSurveyDB);
  var drSurveyDB = api.sql.rows();
  drSurveyDB = drSurveyDB.reduce(function (acc, row) {
    return acc[row.id] = 0, acc;
  }, {});
  var idEnumsFalsifiedStatus;
  var idEnumsFile_LoadType;
  var idEnumsMimeType;
  var idEnumsDefectDetectionStatus;
  var idEnumsObject_Name;
  object.topics.forEach(function (topic) {
    topic.rows.forEach(function (row) {
      if (row.drSurveyId === '0' || regenerateIds) {
        row.drSurveyId = api.getId.newId(distributorId);
      }

      // Проставляет значение 1 для текущего row,
      if (drSurveyDB[row.drSurveyId] === 0) drSurveyDB[row.drSurveyId] = 1; // во фронте новая строка, которой нет в базе

      var insSQLdrSurvey = "\n              INSERT OR REPLACE INTO [drSurvey] ([id],[idDoc],[idTemplateRow],[idQuestion],[idTopic], \n              ".concat(mtVersion >= 45 ? ' [idPacket], ' : '', " [verstamp])\n              VALUES\n              (\n                ").concat(row.drSurveyId, ", --id\n                ").concat(object.docId, ", --idDoc\n                ").concat(row.idTemplateRow, ", --idTemplateRow\n                ").concat(row.idQuestion, ", --idQuestion\n                ").concat(topic.idTopic, ", --idTopic\n                ").concat(mtVersion >= 45 ? "".concat(row.idPacket, ", --idPacket ") : '', "\n                0 --verstamp\n              )");
      api.sql.exec(insSQLdrSurvey);

      // При первом заполнении при наличии множества ответов по умолчанию
      // Проверка по типу ответа ?????????
      if (row.defValues.length && row.answers && row.answers.length === 1 && Object.keys(row.answers[0]).every(function (key) {
        return row.answers[0][key] === emptyAnswer[key];
      })) {
        row.defValues.forEach(function (defAnswer, indexDefAnswer) {
          if (indexDefAnswer > row.answers.length - 1) {
            row.answers.push({
              drSurveyValueId: '0'
            });
          }
          row.answers[indexDefAnswer].AnswerStr = defAnswer.AnswerStr;
          row.answers[indexDefAnswer].AnswerNumber = defAnswer.AnswerNumber;
          row.answers[indexDefAnswer].AnswerDate = defAnswer.AnswerDate;
          row.answers[indexDefAnswer].AnswerId = defAnswer.AnswerId;
        });
      }
      var sqlGetDrSurveyValuesDB = "SELECT id AS id FROM drSurveyValues WHERE idDocRow = ".concat(row.drSurveyId);
      api.sql.exec(sqlGetDrSurveyValuesDB);
      var DrSurveyValuesDB = api.sql.rows();
      DrSurveyValuesDB = DrSurveyValuesDB.reduce(function (acc, row) {
        return acc[row.id] = 0, acc;
      }, {});
      row.answers.forEach(function (a) {
        if (a.drSurveyValueId === '0' || regenerateIds) {
          a.drSurveyValueId = api.getId.newId(distributorId);
        }
        if (DrSurveyValuesDB[a.drSurveyValueId] === 0) DrSurveyValuesDB[a.drSurveyValueId] = 1;
        a.AnswerStr = a.AnswerStr || '';
        a.AnswerNumber = a.AnswerNumber || '0';
        a.AnswerDate = a.AnswerDate || '1900-01-01 00:00:00';
        a.AnswerId = a.AnswerId || '0';
        var insSQLdrSurveyValues = "\n                INSERT OR REPLACE INTO [drSurveyValues]([id],[idDocRow],[AnswerStr],[AnswerNumber],[AnswerDate],[AnswerID],verstamp)\n                VALUES\n                (\n                  ".concat(a.drSurveyValueId, ", --id\n                  ").concat(row.drSurveyId, ", --idDocRow\n                  '").concat(a.AnswerStr.replace(/'/g, "''"), "', --AnswerStr\n                  '").concat(a.AnswerNumber, "', --AnswerNumber\n                  '").concat(a.AnswerDate, "', --AnswerDate\n                  ").concat(a.AnswerId, ", --AnswerID\n                  0 --verstamp\n                )");
        api.sql.exec(insSQLdrSurveyValues);
      });
      for (var dbRowId in DrSurveyValuesDB) {
        if (DrSurveyValuesDB[dbRowId] === 0) {
          var sqlDeleteDrSurveyValues = "DELETE FROM drSurveyValues WHERE id = ".concat(dbRowId);
          api.sql.exec(sqlDeleteDrSurveyValues);
        }
      }
      if (row.questionType === 'Questions_AnswerType_Photo') {
        var DrSurveyPhotosDB;
        if (mtVersion < 45) {
          var sqlGetDrSurveyPhotosDB = "SELECT id AS id FROM drSurveyPhotos WHERE idDocRow = ".concat(row.drSurveyId);
          api.sql.exec(sqlGetDrSurveyPhotosDB);
          DrSurveyPhotosDB = api.sql.rows();
          DrSurveyPhotosDB = DrSurveyPhotosDB.reduce(function (acc, row) {
            return acc[row.id] = 0, acc;
          }, {});
          row.photos.forEach(function (p) {
            if (p.drSurveyPhotoId === '0' || regenerateIds) {
              p.drSurveyPhotoId = api.getId.newId(distributorId);
            }
            p.photoFileName = p.photoFileName.slice(0, 8) === 'file:///' ? p.photoFileName.slice(8) : p.photoFileName;

            // Обрезаем полный путь для сохранения в базе, полный путь используем для процессинга
            var photoName = p.photoFileName.substring(p.photoFileName.lastIndexOf('/') + 1);
            var SQLiteNow = getSQLiteNow();
            p.photoTime = p.photoTime || SQLiteNow;
            if (DrSurveyPhotosDB[p.drSurveyPhotoId] === 0) DrSurveyPhotosDB[p.drSurveyPhotoId] = 1;
            var IsFalsifiedStatusFieldExists = isFieldExistsCheck('drSurveyPhotos', 'falsifiedStatus');
            idEnumsFalsifiedStatus = idEnumsFalsifiedStatus || getEnumsIdByCodeKey('FalsifiedStatus_NotGuaranteed');
            var insSQL = "\n                        INSERT OR REPLACE INTO [drSurveyPhotos]([id],[idDocRow],[photoTime],[photoFileName],\n                        ".concat(IsFalsifiedStatusFieldExists ? '[falsifiedStatus],' : '', " verstamp)\n                        VALUES\n                        (\n                          ").concat(p.drSurveyPhotoId, ", --id\n                          ").concat(row.drSurveyId, ", --idDocRow\n                          '").concat(p.photoTime, "', --photoTime\n                          '").concat(photoName, "', --photoFileName\n                          ").concat(IsFalsifiedStatusFieldExists ? "".concat(idEnumsFalsifiedStatus, ", --[falsifiedStatus] ") : '', "\n                          0 --verstamp\n                        )");
            api.sql.exec(insSQL);
            api.warp.filesUpload.addFile(p.photoFileName, {
              'tags': ['okr-survey']
            });
            p.photoFileName = photoName;
          });
          for (var _dbRowId in DrSurveyPhotosDB) {
            if (DrSurveyPhotosDB[_dbRowId] === 0) {
              var sqlDeleteDrRowsPhotos = "DELETE FROM drSurveyPhotos WHERE id = ".concat(_dbRowId);
              api.sql.exec(sqlDeleteDrRowsPhotos);
            }
          }
        } else {
          // Проверяем пришедшие файлы
          if (!row.photos.length) {
            if (row.idPacket !== '0') {
              // мтшка создает пакет без файлов, если до этого был файлы, здесь пока пробую так
              var sqlSetZeroPacket = "UPDATE drSurvey SET idPacket = 0 WHERE id = ".concat(row.drSurveyId);
              api.sql.exec(sqlSetZeroPacket);
              row.idPacket = '0';
            }
            return;
          }
          if (row.idPacket !== '0') {
            var sqlGetPhotoFilesDB = "\n                        SELECT\n                        f.FileName AS FileName\n                        FROM drSurvey AS sr\n                        JOIN refFilePacketsFiles AS fpf ON fpf.idPacket = sr.idPacket\n                        JOIN refFiles AS f ON f.id = fpf.idFile\n                        WHERE fpf.deleted = 0 AND fpf.idPacket = ".concat(row.idPacket, "\n                        AND sr.id = ").concat(row.drSurveyId, "\n                        ORDER BY f.id");
            api.sql.exec(sqlGetPhotoFilesDB);
            DrSurveyPhotosDB = api.sql.rows();
            DrSurveyPhotosDB = DrSurveyPhotosDB.map(function (_ref3) {
              var FileName = _ref3.FileName;
              return getFileNameOfPath(FileName);
            }).sort();
          }
          var DrSurveyPhotosObj = row.photos.map(function (_ref4) {
            var photoFileName = _ref4.photoFileName;
            return getFileNameOfPath(photoFileName);
          }).sort();
          api.log.info('check photoArrays DrSurveyPhotosDB ' + JSON.stringify(DrSurveyPhotosDB));
          api.log.info('check photoArrays DrSurveyPhotosObj ' + JSON.stringify(DrSurveyPhotosObj));
          if (arraysEqual(DrSurveyPhotosDB, DrSurveyPhotosObj) && !regenerateIds) return;
          api.log.info('создаем пакет');

          // добавляем фото в базу
          row.photos.forEach(function (p) {
            if (p.drSurveyPhotoId === '0') {
              p.drSurveyPhotoId = api.getId.newId(distributorId);
              p.photoFileName = p.photoFileName.slice(0, 8) === 'file:///' ? p.photoFileName.slice(8) : p.photoFileName;
              var photoName = p.photoFileName.slice(p.photoFileName.lastIndexOf('/') + 1);
              var SQLiteNow = getSQLiteNow();
              p.photoTime = p.photoTime || SQLiteNow;
              idEnumsFile_LoadType = idEnumsFile_LoadType || getEnumsIdByCodeKey('File_LoadType_STDrive');
              idEnumsMimeType = idEnumsMimeType || getEnumsIdByCodeKey('MimeType_JPEG');
              var sqlInsRefFiles = "\n                            INSERT INTO [refFiles]\n                            ([id], [FileName], [Uri], [idLoadType], [idMimeType], [deleted], [verstampMt],\n                            [verstamp], [FileCreatedDateTime] )\n                            VALUES\n                              (\n                                ".concat(p.drSurveyPhotoId, ", --[id]\n                                '").concat(photoName, "', --[FileName]\n                                '', --[Uri]\n                                ").concat(idEnumsFile_LoadType, ", --[idLoadType]\n                                ").concat(idEnumsMimeType, ", --[idMimeType]\n                                0, --[deleted]\n                                0, --[verstampMt]\n                                0, --[verstamp]\n                                '").concat(p.photoTime, "' --[FileCreatedDateTime]\n                              )");
              api.sql.exec(sqlInsRefFiles);
              var refPhotoFilesId = api.getId.newId(distributorId);
              idEnumsDefectDetectionStatus = idEnumsDefectDetectionStatus || getEnumsIdByCodeKey('DefectDetectionStatus_NoInfo');
              var sqlInsRefPhotoFiles = "\n                              INSERT INTO [refPhotoFiles]\n                              ([id], [idFile], [falsifiedStatus], [DefectDetectionStatus], [verstamp])\n                              VALUES\n                              (\n                                ".concat(refPhotoFilesId, ", --[id]\n                                ").concat(p.drSurveyPhotoId, ", --[idFile]\n                                0, --[falsifiedStatus]\n                                ").concat(idEnumsDefectDetectionStatus, ", --[DefectDetectionStatus]\n                                0 --[verstamp]\n                              )");
              api.sql.exec(sqlInsRefPhotoFiles);
              var sqlInsMtinternalRefFilesMeta = "\n                              INSERT INTO [mtinternal_refFilesMeta]\n                              ([id], [MTLocalPath])\n                              VALUES\n                              (\n                                ".concat(p.drSurveyPhotoId, ", --[id]\n                                'mtdata:").concat(p.photoFileName.slice(p.photoFileName.indexOf('/db/')), "' --[MTLocalPath]\n                              )");
              api.sql.exec(sqlInsMtinternalRefFilesMeta);
              api.warp.filesUpload.addFile(p.photoFileName, {
                'tags': ['okr-survey']
              });
              p.photoFileName = photoName;
            }
          });

          // Обновляем пакет
          var refFilePacketsId = api.getId.newId(distributorId);
          idEnumsObject_Name = idEnumsObject_Name || getEnumsIdByCodeKey('Object_Name_Surveys');
          var sqlInsRefFilePackets = "\n                      INSERT INTO [refFilePackets]\n                      ([id], [Name], [idBaseObject], [deleted], [verstamp])\n                      VALUES\n                      (\n                        ".concat(refFilePacketsId, ", --[id]\n                        NULL, --[Name]\n                        ").concat(idEnumsObject_Name, ", --[idBaseObject]\n                        0, --[deleted]\n                        0 --[verstamp]\n                      )");
          api.sql.exec(sqlInsRefFilePackets);
          row.photos.forEach(function (p) {
            var refFilePacketsFilesId = api.getId.newId(distributorId);
            var sqlInsRefFilePacketsFiles = "\n                        INSERT INTO [refFilePacketsFiles]\n                        ([id], [idPacket], [idFile], [Name], [Internal], [deleted], [priority], [verstamp])\n                        VALUES\n                        (\n                          ".concat(refFilePacketsFilesId, ", --[id]\n                          ").concat(refFilePacketsId, ", --[idPacket]\n                          ").concat(p.drSurveyPhotoId, ", --[idFile]\n                          NULL, --[Name]\n                          0, --[Internal]\n                          0, --[deleted]\n                          0, --[priority]\n                          0 --[verstamp]\n                          )");
            api.sql.exec(sqlInsRefFilePacketsFiles);
          });
          var sqlSetNewPacket = "\n                    UPDATE drSurvey SET idPacket = ".concat(refFilePacketsId, "\n                    WHERE id = ").concat(row.drSurveyId);
          api.sql.exec(sqlSetNewPacket);
          if (row.idPacket !== '0') {
            // removeFilePacket
          }
          row.idPacket = "".concat(refFilePacketsId);
        }
      }
    });
  });
  for (var dbRowId in drSurveyDB) {
    if (drSurveyDB[dbRowId] === 0) {
      var deleteRowsQueries = ["DELETE FROM drSurveyValues WHERE idDocRow = ".concat(dbRowId), "DELETE FROM drSurvey WHERE id = ".concat(dbRowId)];
      if (mtVersion < 45) {
        deleteRowsQueries.push("DELETE FROM drSurveyPhotos WHERE idDocRow = ".concat(dbRowId));
      }
      deleteRowsQueries.forEach(function (sqlQuery) {
        api.sql.exec(sqlQuery);
      });
    }
  }
  if (!isDraft) {
    var MTDocValidation;
    if (mtVersion >= 45) {
      MTDocValidation = api.survey.doc.validate(object.docId);
    } else {
      MTDocValidation = api.document.validate(object.docId);
    }
    if (notUpload) setZeroVerstamps(object.docId);
    api.log.info("\u041F\u0420\u043E\u0432\u0435\u0440\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438 ".concat(JSON.stringify(MTDocValidation)));
    if (MTDocValidation) {
      if (object.idPreviousVersion !== '0') {
        var sqlPrevVersionOpDate = "UPDATE DocJournal SET OpDate = \n                (SELECT CrDate FROM DocJournal WHERE id = ".concat(object.idPreviousVersion, ")\n                WHERE id = ").concat(object.idPreviousVersion);
        api.sql.exec(sqlPrevVersionOpDate);
      }
      api.log.info("saveDocument in back end ".concat(object.docId, " ").concat(isDraft));
      return object;
    }
  }
  api.log.info("saveDocument in back end ".concat(object.docId, " ").concat(isDraft));
  return object;
}

/**
 * Функция поиска шаблонов ОЛ по имени или списку имен
 * @param {object} options 
 * @param {string | string[]} options.templateNames - названия шаблона или список названий
 * @param {string} [options.templateComment] - комментарий для поиска ол (LIKE '%${templateComment}}%')
 * @param {string} [options.idOutlet] - id торговой точки для фильтрации по сету
 * @param {string} [options.idPosition] - id позиции для фильтрации по сету
 * @param {string} [options.idDistributor] - id дистра для фильтрации по сету
 * @param {string} [options.NoSetsCheck] - отключение фильтрации шаблона по сету
 * @returns {Array<{id: string, Name: string, idFirstVersion: string}>}
 */
function discoverTemplates(_ref5) {
  var templateNamesArg = _ref5.templateNames,
    _ref5$templateComment = _ref5.templateComment,
    templateComment = _ref5$templateComment === void 0 ? '' : _ref5$templateComment,
    idOutletArg = _ref5.idOutlet,
    idPositionArg = _ref5.idPosition,
    idDistributorArg = _ref5.idDistributor,
    _ref5$NoSetsCheck = _ref5.NoSetsCheck,
    NoSetsCheck = _ref5$NoSetsCheck === void 0 ? false : _ref5$NoSetsCheck;
  var idOutlet = idOutletArg || api.context.outletId;
  var idPosition = idPositionArg || api.context.positionId;
  var idDistributor;
  if (idDistributorArg) {
    idDistributor = idDistributorArg;
  } else if (api.context.distributorId && api.context.distributorId !== '0') {
    idDistributor = api.context.distributorId;
  } else {
    idDistributor = getDistributorCoId();
  }
  var IdsFromSets = [];
  if (!NoSetsCheck) {
    IdsFromSets = api.sets.idItemsOPDS(idOutlet, idPosition, idDistributor);
  }
  var templateNames = [];
  if (templateNamesArg) {
    templateNames = Array.isArray(templateNamesArg) ? templateNamesArg : [templateNamesArg];
    templateNames = templateNames.map(function (n) {
      return "'".concat(n, "'");
    });
  }
  var sqlDiscoverTemplates = "\n      SELECT\n      templ.id AS id,\n      templ.Name AS Name,\n      templ.idFirstVersion as idFirstVersion\n      FROM refQstTemplates AS templ\n      JOIN (\n      SELECT idItem AS idItem, max(EventDate) AS EventDate FROM refPropertiesHistory AS ph\n      WHERE date(ph.EventDate) <= date('now', 'localtime')\n      GROUP BY idItem\n      ) AS phDate ON phDate.idItem = templ.id\n      JOIN refPropertiesHistory AS ph ON ph.EventDate = phDate.EventDate AND ph.idItem = phDate.idItem\n      WHERE (\n      templ.Name IN (".concat(templateNames.join(', '), ")\n      ").concat(templateComment.length ? "OR templ.Comment LIKE '%".concat(templateComment, "}%'") : '', "\n      ) \n      AND templ.deleted = 0\n      AND ph.idEvent = 133 AND ph.deleted = 0 \n      ").concat(!NoSetsCheck ? "AND templ.id IN (".concat(IdsFromSets.join(', '), ")") : '', "\n      ORDER BY templ.Name");
  api.log.info("\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0437\u0430\u043F\u0440\u043E\u0441\u0430 sqlDiscoverTemplates ".concat(sqlDiscoverTemplates));
  api.sql.exec(sqlDiscoverTemplates);
  var res = api.sql.rows();
  return res;
}

/**
 * Функция поиска документов ОЛ по id шаблона
 * @param {object} options
 * @param {string} options.idTemplate
 * @param {string} [options.idOutlet]
 * @param {string} [options.idVisit]
 * @param {string[]} [options.statuses] - Список статусов доков в DocJournal
 * @param {boolean} [options.todayOnly] - Флаг поиска только сегодняшних доков. По умолчанию true
 * @returns {Array<{docId: string, idStatus: string, OpDate: string, idTemplate: string}>}
 */
function discoverDocs(_ref6) {
  var idTemplate = _ref6.idTemplate,
    idOutlet = _ref6.idOutlet,
    idVisit = _ref6.idVisit,
    _ref6$statuses = _ref6.statuses,
    statuses = _ref6$statuses === void 0 ? ['8', '1'] : _ref6$statuses,
    _ref6$todayOnly = _ref6.todayOnly,
    todayOnly = _ref6$todayOnly === void 0 ? true : _ref6$todayOnly;
  if (!idTemplate) return;
  var contextMT = api.context;
  // idVisit = idVisit || contextMT.visitId;

  idOutlet = idOutlet || contextMT.outletId;
  var sqlDiscoverDocs = "\n      SELECT \n      dj.id AS docId,\n      dj.idStatus AS idStatus,\n      dj.OpDate AS OpDate,\n      sh.idTemplate AS idTemplate\n      FROM DocJournal AS dj\n      JOIN dhSurvey AS sh ON sh.id = dj.id\n      JOIN refQstTemplates AS qt ON qt.id = sh.idTemplate\n      WHERE qt.idFirstVersion = (\n          SELECT idFirstVersion FROM refQstTemplates WHERE id = ".concat(idTemplate, "\n      )\n      ").concat(idVisit && todayOnly ? "AND dj.idVisit = ".concat(idVisit, " ") : '', "\n      AND dj.").concat(mtVersion >= 45 ? 'idOutlet' : 'idBuyPoint', " = ").concat(idOutlet, "\n      AND dj.idOperation = 33\n      AND dj.deleted = 0\n      AND dj.idStatus IN (").concat(statuses.join(', '), ") \n      AND date(dj.crDate) <= date('now', 'localtime')\n      ").concat(todayOnly ? 'AND date(dj.crDate) >= date(\'now\', \'start of day\', \'localtime\')' : '', "\n      ORDER BY dj.idStatus DESC,  dj.opDate DESC");
  api.log.info("\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0437\u0430\u043F\u0440\u043E\u0441\u0430 sqlDiscoverDocs ".concat(sqlDiscoverDocs));
  api.sql.exec(sqlDiscoverDocs);
  var res = api.sql.rows();
  return res;
}

/**
 * Функция получения из базы документа ол
 * @param {object} options
 * @param {string} options.surveyDocId - id документа
 * @returns {OKR_CRUD_Questionnaire}
 */
function getDocument(_ref7) {
  var surveyDocId = _ref7.surveyDocId;
  api.log.info("\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0432\u0445\u043E\u0434\u0430 getDocument surveyDocId ".concat(surveyDocId));
  if (!surveyDocId) return;
  var getIdTemplateSql = "SELECT idTemplate AS idTemplate FROM dhSurvey WHERE id = ".concat(surveyDocId);
  api.sql.exec(getIdTemplateSql);
  var idTemplate = api.sql.rows()[0].idTemplate;
  if (!idTemplate) return;
  var getIdTemplateActualSql = "\n    SELECT qt.id AS idTemplate FROM refQstTemplates AS qt \n    WHERE qt.deleted = 0 AND qt.idFirstVersion IN\n    (SELECT idFirstVersion AS idFirstVersion FROM\n    refQstTemplates WHERE id = ".concat(idTemplate, ")");
  api.sql.exec(getIdTemplateActualSql);
  var idTemplateActual = api.sql.rows()[0].idTemplate;
  var isDocTemplateActual = idTemplate === idTemplateActual;
  var QuestionnaireObject = createQuestionnaireObject({
    idTemplate: idTemplate,
    checkHistory: false
  });
  var isPreviousTemplateValid = Boolean(QuestionnaireObject);
  if (!isPreviousTemplateValid) {
    if (isDocTemplateActual) return;
    QuestionnaireObject = createQuestionnaireObject({
      idTemplate: idTemplateActual,
      checkHistory: false
    });
    if (!QuestionnaireObject) return;
  }
  var selectSql = "\n      SELECT\n      dj.id AS docId,\n      dj.OpDate AS OpDate,\n      dj.idFirstVersion AS idFirstVersion,\n      dj.idPreviousVersion AS idPreviousVersion,\n      dj.".concat(mtVersion >= 45 ? 'idOutlet' : 'idBuyPoint', " AS idOutlet,\n      dj.idVisit AS idVisit,\n      dj.Comment AS docComment,\n      dj.idPhysicalPerson AS idPhysicalPerson,\n      dj.idRoute AS idRoute,\n      dj.idPosition AS idPosition,\n      dj.idStatus AS idStatus,\n      dj.deleted AS deleted\n      FROM docJournal AS dj\n      WHERE dj.id = ").concat(surveyDocId);
  api.sql.exec(selectSql);
  var docInfo = api.sql.rows();
  QuestionnaireObject.docId = docInfo[0].docId;
  QuestionnaireObject.OpDate = docInfo[0].OpDate;
  QuestionnaireObject.idFirstVersion = docInfo[0].idFirstVersion;
  QuestionnaireObject.idPreviousVersion = docInfo[0].idPreviousVersion;
  QuestionnaireObject.idOutlet = docInfo[0].idOutlet;
  QuestionnaireObject.idVisit = docInfo[0].idVisit;
  QuestionnaireObject.docComment = docInfo[0].docComment;
  QuestionnaireObject.idStatus = docInfo[0].idStatus;
  QuestionnaireObject.deleted = docInfo[0].deleted;
  QuestionnaireObject.idPhysicalPerson = docInfo[0].idPhysicalPerson;
  QuestionnaireObject.idRoute = docInfo[0].idRoute;
  QuestionnaireObject.idPosition = docInfo[0].idPosition;
  if (!isPreviousTemplateValid) {
    return QuestionnaireObject;
  }
  QuestionnaireObject.topics.forEach(function (topic) {
    var rowsDB = [];
    topic.rows.forEach(function (row) {
      var selectSqlDrSurveyId = "\n            SELECT \n            sr.id AS drSurveyId,\n            sr.idQuestion AS idQuestion,\n            sr.idTemplateRow AS TemplateRow,\n            ".concat(mtVersion >= 45 ? 'sr.idPacket AS idPacket, ' : '', "\n            sr.idTopic AS idTopic\n            FROM drSurvey AS sr\n            WHERE sr.idDoc = ").concat(surveyDocId, "\n            -- AND sr.idQuestion = ").concat(row.idQuestion, " \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0437\u0430\u043F\u0438\u0441\u0435\u0439 \u0432 drSurvey \u043D\u0430 \u043E\u0434\u0438\u043D idTemplateRow, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0435\u0441\u043B\u0438 \u0443\u043A\u0430\u0437\u0430\u043D idQuestionClassifier\n            AND sr.idTemplateRow = ").concat(row.idTemplateRow, "\n            AND sr.idTopic = ").concat(topic.idTopic);
      api.sql.exec(selectSqlDrSurveyId);
      var res = api.sql.rows();
      if (!res.length) {
        // нет строки с ответом, проставляется дефолт из шаблона
        rowsDB.push(row);
        return;
      }
      res.forEach(function (r) {
        var rowDB = JSON.parse(JSON.stringify(row));
        rowDB.answers = [];
        rowDB.photos = [];
        rowDB.drSurveyId = r.drSurveyId;
        rowDB.idQuestion = r.idQuestion;
        if (mtVersion >= 45) {
          rowDB.idPacket = r.idPacket;
        }
        var selectSqlDrSurveyValues = "\n                SELECT\n                id AS drSurveyValueId,\n                AnswerDate AS AnswerDate,\n                AnswerID AS AnswerId,\n                AnswerNumber AS AnswerNumber,\n                AnswerStr AS AnswerStr\n                FROM drSurveyValues WHERE idDocRow = ".concat(rowDB.drSurveyId);
        api.sql.exec(selectSqlDrSurveyValues);
        var rAnswers = api.sql.rows();
        rAnswers.forEach(function (rAnswer) {
          rowDB.answers.push({
            drSurveyValueId: rAnswer.drSurveyValueId,
            AnswerDate: rAnswer.AnswerDate ? rAnswer.AnswerDate : '1900-01-01 00:00:00.00',
            AnswerId: rAnswer.AnswerId,
            AnswerNumber: rAnswer.AnswerNumber,
            AnswerStr: rAnswer.AnswerStr
          });
        });
        if (row.questionType === 'Questions_AnswerType_Photo') {
          var rPhotos;
          var selectSqlDrSurveyPhotos;
          if (mtVersion < 45) {
            selectSqlDrSurveyPhotos = "\n                        SELECT\n                        id AS drSurveyPhotoId,\n                        photoTime AS photoTime,\n                        photoFileName AS photoFileName\n                        FROM drSurveyPhotos WHERE idDocRow = ".concat(rowDB.drSurveyId);
            api.sql.exec(selectSqlDrSurveyPhotos);
            rPhotos = api.sql.rows();
            rPhotos.forEach(function (rPhoto) {
              rowDB.photos.push({
                drSurveyPhotoId: rPhoto.drSurveyPhotoId,
                photoTime: rPhoto.photoTime,
                photoFileName: rPhoto.photoFileName
              });
            });
          } else {
            selectSqlDrSurveyPhotos = "\n                        SELECT\n                        f.id AS drSurveyPhotoId,\n                        f.FileCreatedDateTime AS photoTime,\n                        f.FileName AS photoFileName\n                        FROM drSurvey AS sr\n                        JOIN refFilePacketsFiles AS fpf ON fpf.idPacket = sr.idPacket\n                        JOIN refFiles AS f ON f.id = fpf.idFile\n                        WHERE fpf.deleted = 0 AND sr.id = ".concat(rowDB.drSurveyId, "\n                        ORDER BY f.FileCreatedDateTime, f.id");
            api.sql.exec(selectSqlDrSurveyPhotos);
            rPhotos = api.sql.rows();
            rPhotos.forEach(function (rPhoto) {
              rowDB.photos.push({
                drSurveyPhotoId: rPhoto.drSurveyPhotoId,
                photoTime: rPhoto.photoTime,
                photoFileName: rPhoto.photoFileName
              });
            });
          }
        }
        rowsDB.push(rowDB);
      });
    });
    topic.rows = rowsDB;
  });
  if (isPreviousTemplateValid && !isDocTemplateActual) {
    api.log.info("check QuestionnaireObject idTemplate ".concat(idTemplate));
    api.log.info("check QuestionnaireObject ".concat(JSON.stringify(QuestionnaireObject)));
    var QuestionnaireObjectActual = createQuestionnaireObject({
      idTemplate: idTemplateActual,
      checkHistory: false
    });
    api.log.info("check QuestionnaireObjectActual idTemplate ".concat(idTemplateActual));
    api.log.info("check QuestionnaireObjectActual ".concat(JSON.stringify(QuestionnaireObjectActual)));
    QuestionnaireObjectActual.idFirstVersion = QuestionnaireObject.idFirstVersion;
    QuestionnaireObjectActual.idPreviousVersion = QuestionnaireObject.docId;
    QuestionnaireObjectActual.OpDate = QuestionnaireObject.OpDate;
    QuestionnaireObjectActual.idOutlet = QuestionnaireObject.idOutlet;
    QuestionnaireObjectActual.idVisit = QuestionnaireObject.idVisit;
    QuestionnaireObjectActual.docComment = QuestionnaireObject.docComment;
    QuestionnaireObjectActual.idStatus = QuestionnaireObject.idStatus;
    QuestionnaireObjectActual.deleted = QuestionnaireObject.deleted;
    QuestionnaireObjectActual.idPhysicalPerson = QuestionnaireObject.idPhysicalPerson;
    QuestionnaireObjectActual.idRoute = QuestionnaireObject.idRoute;
    QuestionnaireObjectActual.idPosition = QuestionnaireObject.idPosition;
    QuestionnaireObject = mergeQuestionnaireAnswers({
      QTo: QuestionnaireObjectActual,
      QFrom: QuestionnaireObject
    });
    api.log.info("check QuestionnaireObject res ".concat(JSON.stringify(QuestionnaireObject)));
  }
  return QuestionnaireObject;
}

/**
 * Функция удаления документа
 * @param {object} options
 * @param {string} options.idDoc - id документа
 * @returns {void}
 */
function deleteDocument(_ref8) {
  var idDoc = _ref8.idDoc;
  if (!idDoc) return;
  // { idDoc, deleting: true }
  stornDocument(idDoc, true);
  api.exchange.processChangedTables(['DocJournal']);
}

/**
 * Получение условий(меты) ОЛ по idFirstVersion или id шаблона 
 * @param {object} options 
 * @param {string} [options.idTemplate]
 * @param {string} [options.idTemplateFV]
 * @return {string}
 */
function getQuestionnaireMeta(_ref9) {
  var idTemplate = _ref9.idTemplate,
    idTemplateFV = _ref9.idTemplateFV;
  if (!idTemplate && !idTemplateFV) return '';
  var isTableExists = isTableExistsCheck('refQstTemplatesCondition');
  if (!isTableExists) return '';
  var sqlQueryCondition = "\n    SELECT Condition AS Condition FROM refQstTemplatesCondition AS qtc\n    WHERE qtc.deleted = 0\n    ".concat(idTemplateFV ? " AND qtc.idTemplateFirstVersion = '".concat(idTemplateFV, "'") : '', "\n    ").concat(idTemplate ? " AND qtc.idTemplateFirstVersion IN (SELECT idFirstVersion FROM refQstTemplates WHERE id = ".concat(idTemplate, " )") : '', "\n    ");
  api.sql.exec(sqlQueryCondition);
  var sqlQueryConditionRes = api.sql.rows();
  if (sqlQueryConditionRes[0]) {
    return sqlQueryConditionRes[0].Condition;
  }
  return '';
}

// Вспомогательные функции

function getSQLiteNow() {
  var SQLiteNowQuery = "SELECT DATETIME('now', 'localtime') AS Now";
  api.sql.exec(SQLiteNowQuery);
  return api.sql.rows()[0].Now;
}
function getDistributorCoId() {
  var sqlQuery = 'SELECT id AS id FROM refDistributors WHERE NodeID = 1';
  api.sql.exec(sqlQuery);
  return api.sql.rows()[0].id;
}
function arraysEqual(a, b) {
  /// https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
function isTableExistsCheck(tableName) {
  var sqlQuery = "PRAGMA table_info(".concat(tableName, ")");
  api.sql.exec(sqlQuery);
  var sqlQueryRes = api.sql.rows();
  return Boolean(sqlQueryRes.length);
}
function isFieldExistsCheck(tableName, fieldName) {
  var sqlQuery = "PRAGMA table_info(".concat(tableName, ")");
  api.sql.exec(sqlQuery);
  var sqlQueryRes = api.sql.rows();
  for (var i = 0; i < sqlQueryRes.length; i++) {
    if (sqlQueryRes[i].name === fieldName) return true;
  }
  return false;
}
function getFileNameOfPath(path) {
  var fileName = path;
  var slashIndex = path.lastIndexOf('/');
  if (slashIndex !== -1) fileName = path.slice(slashIndex + 1);
  var dotIndex = fileName.indexOf('.');
  if (dotIndex !== -1) fileName = fileName.slice(0, dotIndex);
  return fileName;
}

/**
 * Вмерживание ответов одного questionniare в другой (мутирование).
 * @param {object} params - Параметры
 * @param {object} params.QTo - Куда вмерживаем
 * @param {object} params.QFrom - Откуда вмерживаем
 * @param {object} [params.questionsKeys] - Объект с ключами вопросов, которые хотим вмержить
 * @returns params.QTo
 */
function mergeQuestionnaireAnswers(_ref10) {
  var QTo = _ref10.QTo,
    QFrom = _ref10.QFrom,
    questionsKeys = _ref10.questionsKeys;
  var QToSkeletonTopQuest = {};
  if (QTo.topics && QTo.topics.length) {
    QTo.topics.forEach(function (topic) {
      topic.rows.forEach(function (row) {
        QToSkeletonTopQuest[topic.idTopic + row.idQuestion] = row.answers;
      });
    });
  }
  var QFromSkeletonTopQuest = {};
  if (QFrom.topics && QFrom.topics.length) {
    QFrom.topics.forEach(function (topic) {
      topic.rows.forEach(function (row) {
        QFromSkeletonTopQuest[topic.idTopic + row.idQuestion] = row.answers;
      });
    });
  }
  Object.keys(QToSkeletonTopQuest).forEach(function (key) {
    if (questionsKeys && !questionsKeys[key]) return;
    if (QFromSkeletonTopQuest[key]) {
      QFromSkeletonTopQuest[key].forEach(function (answer, index) {
        if (!QToSkeletonTopQuest[key][index]) {
          QToSkeletonTopQuest[key][index] = JSON.parse(JSON.stringify(QToSkeletonTopQuest[key][0]));
        }
        Object.keys(answer).forEach(function (aProp) {
          if (aProp !== 'drSurveyValueId' && answer[aProp] !== undefined && answer[aProp] !== null) {
            QToSkeletonTopQuest[key][index][aProp] = answer[aProp];
          }
        });
      });
    }
  });
  return QTo;
}

/**
 * Получение idFirstVersion шаблона ол
 * @param {object} options
 * @param {string} options.idTemplate - id шаблона
 * @return {string}
 */
function getTemplateFirstVersionId(_ref11) {
  var idTemplate = _ref11.idTemplate;
  var sqlQuery = "SELECT idFirstVersion AS idFirstVersion FROM refQstTemplates WHERE id = ".concat(idTemplate);
  api.sql.exec(sqlQuery);
  var res = api.sql.rows()[0].idFirstVersion;
  return res;
}
function getEnumsIdByCodeKey(CodeKey) {
  var sqlEnums = "SELECT id AS id FROM Enums WHERE CodeKey = '".concat(CodeKey, "'");
  api.sql.exec(sqlEnums);
  var res = api.sql.rows();
  if (!res.length) api.log.info("\u043D\u0435\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0432 enums \u043F\u043E CodeKey ".concat(sqlEnums));
  return res[0].id;
}

/***/ }),

/***/ "./MT/commonFuncs.js":
/*!***************************!*\
  !*** ./MT/commonFuncs.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CacheCustom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CacheCustom */ "./MT/CacheCustom.js");
/* harmony import */ var _CacheCustom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_CacheCustom__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

// eslint-disable-next-line @typescript-eslint/no-var-requires
var libsFunctions = __webpack_require__(/*! functions.js */ "functions.js");

/* eslint-disable no-use-before-define */
global.getContext = getContext;
global.getConstant = getConstant;
global.getMapper = getMapper;
global.getMTSetting = getMTSetting;
global.setMTSetting = setMTSetting;
global.SQL = SQL;
global.getMTVersion = getMTVersion;
global.getNewId = getNewId;
global.getVerstamp = getVerstamp;
global.scanStamp = scanStamp;
global.takePhoto = takePhoto;
global.validateDoc = validateDoc;
global.validateSurveyDoc = validateSurveyDoc;
global.getIdsFromSets = getIdsFromSets;
global.startManualExchange = startManualExchange;
global.getLastTopEvent = getLastTopEvent;
global.filesUploadAddFile = filesUploadAddFile;
global.filesUploadMarkFileToSend = filesUploadMarkFileToSend;
global.getPhotoFolder = getPhotoFolder;
global.getAttachmentsPath = getAttachmentsPath;
global.isFileExists = isFileExists;
global.processChangedTables = processChangedTables;
global.getRouteInfo = getRouteInfo;
global.log = log;
global.addOutletToTerritory = addOutletToTerritory;
global.markOutletToSend = markOutletToSend;
global.lastLocationData = lastLocationData;
global.openUriFromBack = openUriFromBack;
global.evalAndCallFunctionInBack = evalAndCallFunctionInBack;
global.updateBufferVar = updateBufferVar;
global.callFnwithBufferVarArgs = callFnwithBufferVarArgs;
global.textFileRead = textFileRead;
global.openMTmenu = openMTmenu;
global.cacheInsert = cacheInsert;
global.cacheGetValue = cacheGetValue;
global.cacheRemove = cacheRemove;
global.SubmitExtAttr = SubmitExtAttr;
global.getWorkflowSteplist = getWorkflowSteplist;
global.getStepState = getStepState;
global.getTask = getTask;
global.editTask = editTask;
global.createTask = createTask;
global.sendMessage = sendMessage;
global.isTableExists = isTableExists;
global.callLibsFunction = callLibsFunction;
global.callBackGlobalFunction = callBackGlobalFunction;
function getContext() {
  var _api = api,
    context = _api.context;
  return JSON.stringify(context);
}
function getConstant(msg) {
  var _JSON$parse = JSON.parse(msg),
    distirbutorId = _JSON$parse.distirbutorId;
  var _JSON$parse2 = JSON.parse(msg),
    code = _JSON$parse2.code;
  if (!distirbutorId) {
    distirbutorId = api.context.distirbutorId;
  }
  var res = api.constants.value(code, distirbutorId);
  api.log.info("check constant res ".concat(JSON.stringify(res)));
  return JSON.stringify(res);
}
function openMTmenu() {
  api.launcher.toggleGlobalMenu();
}
function getMapper() {
  return JSON.stringify(mapper);
}
function getMTSetting(msg) {
  var _JSON$parse3 = JSON.parse(msg),
    group = _JSON$parse3.group,
    name = _JSON$parse3.name,
    defaultValue = _JSON$parse3.defaultValue;
  var value = api.settings.value(group, name, defaultValue);
  api.log.info("check settings value ".concat(JSON.stringify(value)));
  return JSON.stringify(value);
}
function setMTSetting(msg) {
  var _JSON$parse4 = JSON.parse(msg),
    group = _JSON$parse4.group,
    name = _JSON$parse4.name,
    value = _JSON$parse4.value;
  api.settings.setValue(group, name, value);
}
function SQL(sqlQuery) {
  if (api.sql.exec(JSON.parse(sqlQuery))) {
    var rows = api.sql.rows();
    return JSON.stringify(rows);
  }
}
function getMTVersion() {
  var mtVersion = api.warp.app.version().string;
  mtVersion = mtVersion[0] + mtVersion[2];
  return JSON.stringify(mtVersion);
}
function getNewId(msg) {
  var _JSON$parse5 = JSON.parse(msg),
    idDistributor = _JSON$parse5.idDistributor;
  var res = api.getId.newId(idDistributor);
  return JSON.stringify(res);
}
function getVerstamp() {
  var docVerstamp = api.exchange.verstamp();
  return JSON.stringify(docVerstamp);
}
function scanStamp() {
  var newStamp = '';
  newStamp = api.barcodeScaner.scanSingle();
  api.log.info("\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0448\u0442\u0440\u0438\u0445\u043A\u043E\u0434\u0430 ".concat(newStamp));
  return JSON.stringify(newStamp);
}
function takePhoto(msg) {
  api.log.info("takePhoto msg ".concat(msg));
  var _JSON$parse6 = JSON.parse(msg),
    maxCount = _JSON$parse6.maxCount;
  var newPhoto = '';

  // newPhoto = api.photo.takePhotosFromCamera(maxCount);
  newPhoto = api.photo.takePhotos(maxCount);
  api.log.info("\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0444\u043E\u0442\u043E ".concat(newPhoto));
  return JSON.stringify(newPhoto);
}
function validateDoc(docId) {
  api.log.info("\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438 \u0434\u043E\u043A\u0430 validateDoc before".concat(docId));
  var res = api.document.validate(docId);
  api.log.info("\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438 \u0434\u043E\u043A\u0430 validateDoc after".concat(res));
  return JSON.stringify(res);
}
function validateSurveyDoc(docId) {
  api.log.info("\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438 \u0434\u043E\u043A\u0430 api.survey\uA4F8doc.validate before ".concat(docId));
  var res = api.survey.doc.validate(docId);
  api.log.info("\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438 \u0434\u043E\u043A\u0430 api.survey\uA4F8doc.validate after ".concat(JSON.stringify(res)));
  return JSON.stringify(res.success);
}
function getIdsFromSets(msg) {
  api.log.info("check getIdsFromSets msg ".concat(msg));
  var _JSON$parse7 = JSON.parse(msg),
    idOutlet = _JSON$parse7.idOutlet,
    idPosition = _JSON$parse7.idPosition,
    idDistributor = _JSON$parse7.idDistributor;
  var res = api.sets.idItemsOPDS(idOutlet, idPosition, idDistributor);
  return JSON.stringify(res);
}
function startManualExchange() {
  api.log.info('Проверка фонового обмена before');
  api.exchange.manualStart('diff_exchange', {
    need_fulldownload: false,
    is_silent: true,
    is_need_upload_photo: true
  });
  api.log.info('Проверка фонового обмена after');
}
function getLastTopEvent() {
  var lastTopEvent = api.exchange.lastTopEvent();
  api.log.info("\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 lastTopEvent ".concat(JSON.stringify(lastTopEvent)));
  return JSON.stringify(lastTopEvent);
}
function filesUploadAddFile(msg) {
  var _JSON$parse8 = JSON.parse(msg),
    filePath = _JSON$parse8.filePath,
    fileMeta = _JSON$parse8.fileMeta;
  api.log.info("\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043F\u0443\u0442\u0438 \u0434\u043E \u0444\u043E\u0442\u043E filesUploadAddFile ".concat(filePath, " ").concat(JSON.stringify(fileMeta)));
  var res;
  if (filePath && fileMeta) {
    res = api.warp.filesUpload.addFile(filePath, fileMeta);
  } else if (filePath) {
    res = api.warp.filesUpload.addFile(filePath);
  }
  api.log.info("\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 filesUploadAddFile ".concat(JSON.stringify(res)));
  return JSON.stringify(res.success);
}
function filesUploadMarkFileToSend(msg) {
  var _JSON$parse9 = JSON.parse(msg),
    filePath = _JSON$parse9.filePath;
  api.log.info("\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043F\u0443\u0442\u0438 \u0434\u043E \u0444\u043E\u0442\u043E filesUploadMarkFileToSend ".concat(filePath));
  var res = api.warp.filesUpload.markFileToSend(filePath);
  api.log.info("\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 filesUploadMarkFileToSend ".concat(JSON.stringify(res)));
  return JSON.stringify(res.success);
}
function getPhotoFolder() {
  var res = api.settings.photosPath();
  api.log.info("\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043F\u0430\u043F\u043A\u0438 \u0441 \u0444\u043E\u0442\u043E ".concat(res));
  return JSON.stringify(res);
}
function getAttachmentsPath() {
  var res = api.attachments.path();
  return JSON.stringify(res);
}
function isFileExists(msg) {
  var _JSON$parse10 = JSON.parse(msg),
    fileName = _JSON$parse10.fileName;
  api.log.info("\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u043D\u0438\u044F \u0444\u0430\u0439\u043B\u0430 ".concat(fileName));
  var res = api.warp.fs.exists(fileName);
  api.log.info("\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u043D\u0438\u044F  \u0444\u0430\u0439\u043B\u0430 ".concat(res));
  return JSON.stringify(res);
}
function processChangedTables(msg) {
  var _JSON$parse11 = JSON.parse(msg),
    tableNameList = _JSON$parse11.tableNameList;
  api.log.info("\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 processChangedTables ".concat(JSON.stringify(tableNameList)));
  var res = api.exchange.processChangedTables(tableNameList);
  api.log.info("\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 processChangedTables result ".concat(res));
  return JSON.stringify(res);
}
function getRouteInfo(msg) {
  var _JSON$parse12 = JSON.parse(msg),
    routeId = _JSON$parse12.routeId;
  api.log.info("\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 getRouteInfo ".concat(routeId));
  var res = api.route.route(routeId);
  api.log.info("\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 getRouteInfo ".concat(res));
  return JSON.stringify(res);
}
function log(msg) {
  api.log.info(JSON.parse(msg));
  return JSON.stringify(true);
}
function addOutletToTerritory(msg) {
  var _JSON$parse13 = JSON.parse(msg),
    outletId = _JSON$parse13.outletId,
    routeId = _JSON$parse13.routeId;
  api.log.info("addOutletToTerritory ".concat(outletId, " ").concat(routeId));
  var res = api.route.addOutletToTerritory(outletId, routeId);
  api.log.info("\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 addOutletToTerritory ".concat(JSON.stringify(res)));
  return JSON.stringify(res);
}
function markOutletToSend(msg) {
  var _JSON$parse14 = JSON.parse(msg),
    idMain = _JSON$parse14.idMain;
  api.log.info("markOutletToSend ".concat(idMain));
  var res = api.outlets.markToSend(idMain);
  api.log.info("\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 markOutletToSend ".concat(JSON.stringify(res)));
  return JSON.stringify(res);
}
function lastLocationData() {
  var LocationData = api.location.lastLocationData();
  api.log.info("\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442 ".concat(JSON.stringify(LocationData)));

  /* if (LocationData.latitude === 0){
      LocationData = {
          'accuracy': 12.532999992370605, 'altitude': 0, 'bearing': 0, 'latitude': 54.7160085, 'longitude': 20.4400208, 'speed': 0, 'time': '2021-04-20T12:30:16.562Z'
      };
  } */
  // калининград - LocationData = {"accuracy":13.574000358581543,"altitude":0,"bearing":0,"latitude":54.7160057,"longitude":20.4400283,"speed":0,"time":"2021-04-20T11:58:21.214Z"}
  // 5440.5848, 2030.3037

  return JSON.stringify(LocationData);
}
function openUriFromBack(msg) {
  var _JSON$parse15 = JSON.parse(msg),
    uri = _JSON$parse15.uri;
  var res = api.launcher.open(uri);
  api.log.info("check res openUriBack ".concat(JSON.stringify(res)));
  return JSON.stringify(res.success);
}
var bufferVar = '';
function updateBufferVar(msg) {
  bufferVar += msg;
}
function evalAndCallFunctionInBack(msg) {
  var msgParsed = JSON.parse(msg);
  var useBufferVarForArgs = msgParsed.useBufferVarForArgs;
  var _ref = useBufferVarForArgs ? JSON.parse(bufferVar) : msgParsed,
    functionCode = _ref.functionCode,
    _ref$args = _ref.args,
    args = _ref$args === void 0 ? [] : _ref$args;
  bufferVar = '';
  var strToEval = functionCode.startsWith('function') ? "const f = ".concat(functionCode, "; return f(...args);") : functionCode;
  var f = new Function('args', strToEval);
  var res = f(args);
  return JSON.stringify(res);
}
function callFnwithBufferVarArgs(msg) {
  var _JSON$parse16 = JSON.parse(msg),
    functionName = _JSON$parse16.functionName;
  var argsStr = bufferVar;
  bufferVar = '';
  return global[functionName](argsStr);
}
function textFileRead(msg) {
  var _JSON$parse17 = JSON.parse(msg),
    filePath = _JSON$parse17.filePath;
  var res = api.textfile.read(filePath);
  api.log.info("\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 textFileRead ".concat(JSON.stringify(res)));
  return JSON.stringify(res);
}
function cacheInsert(msg) {
  var _JSON$parse18 = JSON.parse(msg),
    cacheName = _JSON$parse18.cacheName,
    key = _JSON$parse18.key,
    value = _JSON$parse18.value;
  _CacheCustom__WEBPACK_IMPORTED_MODULE_0___default().insert(cacheName, key, value);
}
function cacheGetValue(msg) {
  var _JSON$parse19 = JSON.parse(msg),
    cacheName = _JSON$parse19.cacheName,
    key = _JSON$parse19.key;
  _CacheCustom__WEBPACK_IMPORTED_MODULE_0___default().insert(cacheName, key);
}
function cacheRemove(msg) {
  var _JSON$parse20 = JSON.parse(msg),
    cacheName = _JSON$parse20.cacheName,
    key = _JSON$parse20.key;
  _CacheCustom__WEBPACK_IMPORTED_MODULE_0___default().remove(cacheName, key);
}
function SubmitExtAttr(msg) {
  var _JSON$parse21 = JSON.parse(msg),
    elementId = _JSON$parse21.elementId,
    dataList = _JSON$parse21.dataList,
    distributorId = _JSON$parse21.distributorId;
  api.log.info("\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 api.extattribute.submitValueList args ".concat(JSON.stringify({
    elementId: elementId,
    dataList: dataList,
    distributorId: distributorId
  })));
  var res = api.extattribute.submitValueList(elementId, dataList, distributorId);
  api.log.info("\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 api.extattribute.submitValueList res ".concat(JSON.stringify(res)));
  return JSON.stringify(res);
}
function getWorkflowSteplist(msg) {
  var _JSON$parse22 = JSON.parse(msg),
    workflowId = _JSON$parse22.workflowId,
    outletId = _JSON$parse22.outletId,
    positionId = _JSON$parse22.positionId,
    date = _JSON$parse22.date;
  var stepListRes = api.outlets.workflow.stepList(workflowId, outletId, positionId, date);
  if (stepListRes.success) return JSON.stringify(stepListRes.value);
  return JSON.stringify([]);
}
function getStepState(msg) {
  var _JSON$parse23 = JSON.parse(msg),
    stepId = _JSON$parse23.stepId,
    workflowId = _JSON$parse23.workflowId,
    outletId = _JSON$parse23.outletId,
    positionId = _JSON$parse23.positionId,
    date = _JSON$parse23.date;
  var stepStateRes = api.outlets.workflow.stepState(stepId, workflowId, outletId, positionId, date);
  return JSON.stringify(stepStateRes.value);
}
function getCurrentVisit(msg) {
  return api.visits.getCurrentVisit(api.context.visitId).factId;
}
function getTask(msg) {
  var _JSON$parse24 = JSON.parse(msg),
    taskId = _JSON$parse24.taskId;
  return JSON.stringify(api.tasks.task(taskId));
}
function editTask(msg) {
  var _JSON$parse25 = JSON.parse(msg),
    task = _JSON$parse25.task;
  api.log.info('edit task ', msg);
  return JSON.stringify(api.tasks.editTask(task));
}
function createTask(msg) {
  var _JSON$parse26 = JSON.parse(msg),
    task = _JSON$parse26.task;
  api.log.info('create task ', msg);
  return JSON.stringify(api.tasks.createTask(task));
}
function sendMessage(msg) {
  var _JSON$parse27 = JSON.parse(msg),
    eventName = _JSON$parse27.eventName,
    data = _JSON$parse27.data;
  api.log.info('send message check ', JSON.stringify({
    eventName: eventName,
    data: data
  }));
  api.warp.channel.sendMessage(eventName, data);
}
function callLibsFunction(msg) {
  var _JSON$parse28 = JSON.parse(msg),
    functionName = _JSON$parse28.functionName,
    _JSON$parse28$args = _JSON$parse28.args,
    args = _JSON$parse28$args === void 0 ? [] : _JSON$parse28$args;
  var callRes = libsFunctions[functionName].apply(libsFunctions, _toConsumableArray(args));
  api.log.info('callLibsFunction callRes ', JSON.stringify(callRes));
  return JSON.stringify(callRes);
}
function callBackGlobalFunction(msg) {
  var _JSON$parse29 = JSON.parse(msg),
    functionName = _JSON$parse29.functionName,
    _JSON$parse29$args = _JSON$parse29.args,
    args = _JSON$parse29$args === void 0 ? [] : _JSON$parse29$args;
  var strToEval = "const f = ".concat(functionName, "; return f(...args);");
  var f = new Function('args', strToEval);
  var res = f(args);
  return JSON.stringify(res);
}
function isTableExists(msg) {
  var _JSON$parse30 = JSON.parse(msg),
    tableName = _JSON$parse30.tableName;
  api.sql.exec("PRAGMA table_info(".concat(tableName, ")"));
  return JSON.stringify(Boolean(api.sql.rows().length));
}

/***/ }),

/***/ "functions.js":
/*!*******************************!*\
  !*** external "functions.js" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("functions.js");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*********************************************!*\
  !*** ./projects/TestRouterReport/MTback.js ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MT_SurveyCRUD_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/MT/SurveyCRUD.js */ "./MT/SurveyCRUD.js");
/* harmony import */ var _MT_SurveyCRUD_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_MT_SurveyCRUD_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MT_commonFuncs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/MT/commonFuncs.js */ "./MT/commonFuncs.js");


function init() {
  api.form.tools.setToolsMode('none');
  api.form.tools.setShadow(false);
}
function data() {}
global.init = init;
global.data = data;
})();

module.exports.backend = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=backend-lib.js.map