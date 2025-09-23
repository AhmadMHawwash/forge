# FRAMEWORK SUCCESS METRICS

**🎯 PURPOSE**: Quantify framework effectiveness, track improvement, and drive data-based optimization.

**Core Framework:** `@core-doctrine.md`
**Evidence System:** `@standards/evidence-standards.md` `@standards/validation-systems.md`
**Session Tracking:** `@session-state-management.md` `@retrospective.md`

---

## 📊 CORE EFFECTIVENESS METRICS

### 1. Development Velocity Metrics

#### **Requirements Clarity Score** (1-10 scale)
```markdown
## MEASUREMENT CRITERIA
**Score 10**: All requirements clear, no clarification needed
**Score 8-9**: 1-2 minor clarifications required
**Score 6-7**: 3-5 clarifications needed
**Score 4-5**: Significant ambiguity, multiple clarification rounds
**Score 1-3**: Requirements fundamentally unclear, major rework needed

## TRACKING
- **Baseline**: Pre-framework average
- **Target**: >8.0 consistently
- **Measurement**: Count clarification questions/total requirements
```

#### **First-Time Implementation Success Rate**
```markdown
## DEFINITION
Percentage of features/fixes that meet acceptance criteria without rework

## CALCULATION
Success Rate = (Features passing first review / Total features) × 100

## TARGETS
- **Minimum Acceptable**: 70%
- **Good Performance**: 85%
- **Excellent Performance**: 95%
```

#### **Estimation Accuracy**
```markdown
## MEASUREMENT
Actual effort vs. estimated effort ratio

## CALCULATION
Accuracy = 1 - |Actual - Estimated| / Estimated

## TARGETS
- **Acceptable**: >80% accuracy (within 20% of estimate)
- **Good**: >90% accuracy (within 10% of estimate)  
- **Excellent**: >95% accuracy (within 5% of estimate)
```

### 2. Quality Metrics

#### **Defect Density**
```markdown
## MEASUREMENT
Defects per 1000 lines of code (KLOC) in production

## TRACKING
- **Pre-Framework Baseline**: [Establish team baseline]
- **Target Improvement**: 50% reduction within 6 months
- **World-Class Benchmark**: <0.1 defects per KLOC
```

#### **Test Coverage Effectiveness**
```markdown
## MEASUREMENT
- **Coverage Percentage**: Lines covered by tests
- **Coverage Quality**: Defects caught by tests vs. production defects

## TARGETS
- **Coverage Target**: >90% for business logic
- **Effectiveness Target**: >95% of defects caught pre-production
```

#### **Code Quality Score**
```markdown
## MEASUREMENT COMPONENTS
- Cyclomatic complexity (target: <10 per function)
- Code duplication (target: <5%)
- Technical debt ratio (target: <30 minutes per hour of development)
- Maintainability index (target: >70)

## COMPOSITE SCORE
Quality Score = (Complexity Score + Duplication Score + Debt Score + Maintainability Score) / 4
```

### 3. Process Efficiency Metrics

#### **Framework Adherence Rate**
```markdown
## MEASUREMENT
Percentage of projects following complete framework methodology

## TRACKING
- **Phase Completion**: All phases documented with evidence
- **Quality Gates**: All mandatory checks performed
- **Evidence Standards**: Concrete proof provided for all claims

## TARGET
- **Minimum**: 80% adherence for critical projects
- **Goal**: 95% adherence across all projects
```

#### **Time-to-Value**
```markdown
## MEASUREMENT
Time from feature request to user value delivery

## BENCHMARKS
- **Simple Features**: <3 days
- **Medium Features**: <2 weeks  
- **Complex Features**: <6 weeks

## IMPROVEMENT TARGET
20% reduction in time-to-value within 3 months
```

---

## 📈 ADVANCED ANALYTICS

### Framework ROI Calculation
```markdown
## ROI COMPONENTS

**Costs**:
- Framework development time: [X hours]
- Team training time: [Y hours]  
- Additional process overhead: [Z hours per project]

**Benefits**:
- Reduced rework time: [Hours saved per project]
- Faster development cycles: [Hours saved per project]
- Higher quality (reduced defect fixing): [Hours saved]
- Improved stakeholder satisfaction: [Estimated value]

## ROI FORMULA
ROI = (Total Benefits - Total Costs) / Total Costs × 100

## TARGET
Positive ROI within 3 months, >200% ROI within 6 months
```

### Predictive Quality Indicators
```markdown
## LEADING INDICATORS
- **Discovery Phase Thoroughness**: Correlation with final quality
- **Planning Detail Level**: Correlation with execution smoothness  
- **Test Coverage Early**: Correlation with defect rates
- **Evidence Quality**: Correlation with project success

## TRACKING
Monitor leading indicators to predict and prevent issues before they occur
```

---

## 🎯 METRIC COLLECTION METHODS

### Automated Collection
```markdown
## TOOL INTEGRATION
- **Git Metrics**: Commit frequency, PR size, review time
- **CI/CD Metrics**: Build success rate, deployment frequency
- **Testing Metrics**: Coverage, test execution time, failure rates
- **Code Quality**: Static analysis scores, complexity metrics

## IMPLEMENTATION
1. Configure monitoring tools to track framework-specific tags
2. Set up automated reporting dashboards
3. Create alerts for metric degradation
```

### Manual Collection
```markdown
## HUMAN ASSESSMENT
- **Requirements Clarity**: Stakeholder survey after each project
- **User Satisfaction**: Net Promoter Score for delivered features
- **Team Experience**: Developer satisfaction with framework
- **Process Effectiveness**: Retrospective insights and recommendations

## COLLECTION FREQUENCY
- **Real-time**: Automated metrics
- **Weekly**: Progress and velocity metrics
- **Monthly**: Quality and satisfaction metrics
- **Quarterly**: ROI and strategic effectiveness assessment
```

---

## 📋 METRIC DASHBOARDS

### Executive Dashboard
```markdown
## HIGH-LEVEL METRICS (Monthly/Quarterly)
- Framework ROI: [XXX%]
- Development Velocity: [+XX% vs baseline]
- Quality Improvement: [Defect reduction %]
- Team Satisfaction: [X/10 rating]
- Time-to-Value: [Average days, trend]
```

### Team Dashboard  
```markdown
## OPERATIONAL METRICS (Daily/Weekly)
- Current Sprint Velocity: [Story points/week]
- Quality Gate Pass Rate: [XX%]
- Test Coverage: [XX% with trend]
- Technical Debt: [Hours, trending direction]
- Framework Adherence: [XX% of projects]
```

### Project Dashboard
```markdown
## PROJECT-SPECIFIC METRICS
- **Phase Progress**: [Current phase, % complete]
- **Quality Status**: [All gates passed/issues identified]
- **Risk Assessment**: [Current risk level with mitigation status]
- **Stakeholder Satisfaction**: [Latest feedback score]
```

---

## 🔄 CONTINUOUS IMPROVEMENT LOOP

### Metric Review Cycle
```markdown
## WEEKLY REVIEW
- Team retrospective with metric insights
- Identify process adjustments needed
- Update framework based on data

## MONTHLY REVIEW  
- Compare metrics against targets
- Analyze trends and patterns
- Plan framework enhancements

## QUARTERLY REVIEW
- Strategic assessment of framework effectiveness
- ROI analysis and business case validation
- Major framework version updates
```

### Data-Driven Framework Evolution
```markdown
## IMPROVEMENT TRIGGERS
- **Metric Degradation**: >10% drop in any core metric
- **Target Miss**: Failing to meet established benchmarks
- **Trend Analysis**: Negative trends over 3+ time periods
- **Comparative Analysis**: Underperforming vs. industry benchmarks

## RESPONSE PROTOCOL
1. Root cause analysis of metric changes
2. Framework component assessment
3. Targeted improvements to address gaps
4. A/B testing of framework modifications
5. Roll out proven improvements
```

---

## 🎯 SUCCESS CRITERIA VALIDATION

### Framework Maturity Levels
```markdown
## LEVEL 1: BASIC EFFECTIVENESS (Month 1-3)
- [ ] 80% framework adherence rate
- [ ] Baseline metrics established
- [ ] Positive team feedback (>6/10)
- [ ] No significant process disruption

## LEVEL 2: PROVEN VALUE (Month 3-6)  
- [ ] 15% improvement in development velocity
- [ ] 25% reduction in defect rates
- [ ] 85% first-time implementation success
- [ ] Positive ROI demonstrated

## LEVEL 3: STRATEGIC ADVANTAGE (Month 6+)
- [ ] 30% improvement in time-to-value
- [ ] 50% reduction in rework
- [ ] >95% stakeholder satisfaction
- [ ] Framework becomes standard practice
```

### Benchmark Comparisons
```markdown
## INDUSTRY BENCHMARKS
- **Defect Density**: <0.5 per KLOC (industry average: 1-5)
- **Test Coverage**: >90% (industry average: 60-80%)
- **Deployment Frequency**: Daily (industry average: weekly/monthly)
- **Lead Time**: <1 week for simple features (industry average: 2-4 weeks)
```

---

## 📊 METRIC INTERPRETATION GUIDE

### Green Signals (Continue Current Approach)
- All metrics trending upward or stable at target levels
- Team satisfaction high (>8/10)
- Stakeholder feedback positive
- Framework adherence >90%

### Yellow Signals (Monitor Closely)
- 1-2 metrics slightly below target
- Team satisfaction moderate (6-7/10)
- Intermittent process issues
- Framework adherence 70-90%

### Red Signals (Immediate Action Required)
- Multiple metrics declining
- Team satisfaction low (<6/10)
- Frequent process breakdowns
- Framework adherence <70%

---

**🎯 MEASURE PRECISELY. IMPROVE CONTINUOUSLY. VALIDATE EFFECTIVENESS.**
