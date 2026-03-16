# PERFORMANCE VERIFICATION

**Triggers:** verify performance, benchmark, perf check, speed test  
**Use after:** Performance optimization or with `performance-optimizer` overlay

## MEASUREMENT

- [ ] Baseline metrics captured BEFORE the change
- [ ] Same metrics captured AFTER the change with identical conditions
- [ ] Improvement quantified (not "feels faster" — actual numbers)
- [ ] Measurement environment documented (hardware, data size, concurrency)

## DATABASE

- [ ] No N+1 queries (verified with query logging)
- [ ] Queries use appropriate indexes (EXPLAIN ANALYZE reviewed)
- [ ] No full table scans on large tables
- [ ] Connection pooling configured correctly

## API / NETWORK

- [ ] Response payload size reasonable (no over-fetching)
- [ ] Compression enabled for large responses
- [ ] Caching headers set correctly (Cache-Control, ETag)
- [ ] No unnecessary sequential API calls (parallelize where possible)

## FRONTEND

- [ ] Core Web Vitals within targets (LCP, FID, CLS)
- [ ] Bundle size not increased significantly
- [ ] Images optimized and lazy loaded
- [ ] No unnecessary re-renders (React Profiler verified)

## SCALABILITY

- [ ] Tested at 2x-10x current load
- [ ] Memory usage stable under sustained load (no leaks)
- [ ] CPU usage proportional to load (no runaway growth)
- [ ] Graceful degradation under overload (not crash)

## NO REGRESSIONS

- [ ] Other endpoints/features not slowed down
- [ ] Test suite execution time not significantly increased
- [ ] No correctness sacrificed for speed
