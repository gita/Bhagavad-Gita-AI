# Setting up Supabase for Sql table for the rate limiter

This guide will walk you through the process of setting up Supabase for use with Next.js, to create the sql table and query that is required to limit users 5 api requests per day.

## Creating table requests

1. Open the SQL editor on the Supabase dashboard.
2. Create a new query:

   ```sql
   CREATE  TABLE requests (
     u_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
     created_at timestamptz DEFAULT  (now() AT TIME ZONE 'utc'::text),
     user_id uuid,
     updated_at timestamptz DEFAULT  (now() AT TIME ZONE 'utc'::text),
     count int2 DEFAULT  0
   );
   ```

3. Run the query to create the table **requests** with the specified columns.
4. Go to Table Editor section on supabase, you will find that the table is created.

### Creating the IncrementCount Function

1. Open the SQL editor on the Supabase dashboard.
2. In the SQL editor, run the following query:

   ```sql
   CREATE OR REPLACE FUNCTION incrementCount(id uuid)
   RETURNS int AS $$
   DECLARE
       cnt integer;
   BEGIN
     IF EXISTS (SELECT 1 FROM requests WHERE user_id = id) THEN
       SELECT count INTO cnt FROM requests WHERE user_id = id;
       IF DATE_TRUNC('day', (SELECT created_at AT TIME ZONE 'UTC' FROM requests WHERE user_id = id)) < DATE_TRUNC('day', CURRENT_TIMESTAMP AT TIME ZONE 'UTC') THEN
         UPDATE requests
         SET count = 1,
             created_at = CURRENT_TIMESTAMP,
             updated_at = CURRENT_TIMESTAMP
         WHERE user_id = id;
         RETURN 1;
       ELSEIF cnt = 5 THEN
         RETURN 0;
       ELSE
         UPDATE requests
         SET count = count + 1,
             updated_at = CURRENT_TIMESTAMP
         WHERE user_id = id;
         RETURN cnt + 1;
       END IF;
     ELSE
       INSERT INTO requests (user_id, count, created_at, updated_at)
       VALUES (id, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
       RETURN 1;
     END IF;
   END;
   $$ LANGUAGE plpgsql VOLATILE;

   ```

3. Run the query to create the function **incrementCount**.
